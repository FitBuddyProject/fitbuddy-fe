import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "store/slices/modal";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { RootState } from "store/store";
import { levelActions } from "store/slices/level";

import styled from "styled-components";
import { theme } from "styles/theme";

import Character from "./Character";
import LightController from "./controls/LightController";
import CustomOrbitControls from "./controls/CustomOrbitControls";
import { authActions } from "store/slices/auth/auth.slice";
import { earnExp } from "api/buddy";
import { syncTired } from "api/user";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const BuddyComponent = ({ fileName, isComponent = false, isShowLabel = true, level = 1, name = "" }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.auth);
  const { buddy } = useSelector((state: RootState) => state.buddy);

  const handlePet = () => {
    if (isComponent) return;
    dispatch(
      modalActions.pushNotificationModal({
        content: `쓰다듬어줘서 고마워요.\n내일 다시 쓰다듬어 주세요.🥰`,
        subContent: `피로도 -25 경험치 +5`,
      })
    );
    updateExp();
    updateTired();
  };

  // 경험치 업데이트
  const updateExp = async () => {
    const exp = 5;
    const params = { uuid: buddy.uuid, exp };
    const res = await earnExp(params);
    dispatch(levelActions.gainXP({ exp }));
    console.log("earnExp :: {}", res);
  };

 // 피로도 업데이트
  const updateTired = async () => {
    if (!userData) return;
    const tired = 25;
    const params = { uuid: buddy.uuid, tired };
    const res = await syncTired(params);
    console.log("handleTired :: {}", res);

    // tired 값 증가
     const updatedTired = Math.max(0, Math.min(userData.tired + 1, 100));
    const updatedData = { ...userData, tired: updatedTired };

    // 변경된 데이터 다시 localStorage에 저장
    localStorage.setItem("userData", JSON.stringify(updatedData));
    dispatch(authActions.setUserData(updatedData));
  };

  return (
    <Container onClick={handlePet}>
      <Canvas camera={{ position: [0, 0, 3], fov: isComponent ? 15 : 30 }}>
        <Suspense fallback={<Loader />}>
          <LightController />
          <CustomOrbitControls />
          {/* 캐릭터 */}
          <Character fileName={fileName} />
        </Suspense>
      </Canvas>
      {isShowLabel && (
        <LabelBox>
          <span className="level">LV {level}</span>
          <span className="name">{name}</span>
        </LabelBox>
      )}
    </Container>
  );
};
export default BuddyComponent;

const Container = styled.div`
  width: 100%;
  height: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const LabelBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  .level {
    font-weight: 800;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ color }) => theme.color.primary};
    background-color: #eddfff;
    border-radius: 0.4rem;
    padding: 0 0.6rem;
  }

  .name {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;
