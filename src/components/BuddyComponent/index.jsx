import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "store/slices/modal";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import useUpdateUserData from "hooks/useUpdateUserData";

import styled from "styled-components";
import { theme } from "styles/theme";
import Character from "./Character";
import LightController from "./controls/LightController";
import CustomOrbitControls from "./controls/CustomOrbitControls";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const BuddyComponent = ({ fileName, isComponent = false, isShowLabel = true, level = 1, name = "" }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { buddy } = useSelector((state) => state.buddy);
  const { updateExp, updateTired, updateActionCount } = useUpdateUserData(userData);

  const handlePet = () => {
    if (isComponent) return;
    dispatch(
      modalActions.pushNotificationModal({
        content:
          userData.petCount === 1
            ? `오늘의 쓰다듬기가 1번 남았어요`
            : `쓰다듬어줘서 고마워요.\n내일 다시 쓰다듬어 주세요.🥰`,
        subContent: `피로도 -25 경험치 +5`,
      })
    );
    if (userData.petCount > 2) return;
    updateExp(buddy.uuid, 5);
    updateTired(buddy.uuid, 25);
    updateActionCount("PET");
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
