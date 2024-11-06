import { useEffect, useState } from "react";
import { RootState } from "store/store";
import { useDispatch, useSelector } from "react-redux";
import { buddyActions } from "store/slices/buddy/buddy.slice";
import { levelActions } from "store/slices/level";

import ProgressBar from "components/ProgressBar";
import Timer from "components/Timer";
import ActionNav from "components/ActionNav";
import BuddyComponent from "components/BuddyComponent";
import WorkoutForm from "components/WorkoutForm";
import CalendarComponent from "components/CalendarComponent";

import styled from "styled-components";
import { theme } from "styles/theme";
import { getBuddies } from "api/buddy";
import { authActions } from "store/slices/auth/auth.slice";

const Home = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.auth);
  const { buddy } = useSelector((state: RootState) => state.buddy);
  const { level, currentEXP, requiredEXP } = useSelector((state: RootState) => state.level);
  const { isActive } = useSelector((state: RootState) => state.action);
  const [character, setCharacter] = useState("");
  const progressPercentage = (currentEXP / requiredEXP) * 100;

  // 버디 가져오기
  const fetchBuddies = async () => {
    if (!userData) return;
    const res = await getBuddies({ uuid: userData.uuid });
    if (res.status === 200) {
      dispatch(buddyActions.getBuddiesSuccess(res.data));
    } else {
      dispatch(buddyActions.getBuddiesError());
    }
  };

  // 경험치, 캐릭터 세팅
  useEffect(() => {
    if (!buddy) return;
    setCharacter(`${buddy.buddy.toLowerCase()}_lv_${level}`);
    dispatch(levelActions.setEXP({ exp: buddy.exp }));
  }, [buddy, character, level]);

  const resetTiredIfNeeded = () => {
    if (!userData) return;

    if (userData.lastResetDate) {
      const updatedData = { ...userData, tired: 0, lastResetDate: new Date().toISOString() };
      localStorage.setItem("userData", JSON.stringify(updatedData));
    } else {
      const lastResetDate = new Date(userData.lastResetDate);
      const now = new Date();

      // 00시가 지났는지 확인
      if (
        now.getDate() !== lastResetDate.getDate() ||
        now.getMonth() !== lastResetDate.getMonth() ||
        now.getFullYear() !== lastResetDate.getFullYear()
      ) {
        // 피로도 리셋
        const updatedData = {
          ...userData,
          lastResetDate: now.toISOString(),
          tired: 0,
          exerciseCount: 0,
          showerCount: 0,
          sleepCount: 0,
          talkCount: 0,
          petCount: 0,
        };
        localStorage.setItem("userData", JSON.stringify(updatedData));
        dispatch(authActions.setUserData(updatedData));
      }
    }
  };

  useEffect(() => {
    fetchBuddies();
    resetTiredIfNeeded();
  }, []);

  return (
    <MainContainer>
      {/* 게이지 영역 */}
      <GaugeArea>
        <ProgressBar label={`레벨${level}`} value={Math.round(progressPercentage)} color={theme.color.primary} />
        <ProgressBar label="피로도" value={userData ? userData.tired : 0} color={theme.color.error} />
      </GaugeArea>

      {/* 운동 시간 영역 */}
      {isActive && <Timer />}

      {/* 캐릭터 영역 */}
      <BuddyComponent fileName={character} level={level} name={buddy ? buddy.name : ""} />

      <BottomArea>
        {/* 행동 영역 */}
        {!isActive && <ActionNav />}

        {/* 달력 영역 */}
        <CalendarComponent />
      </BottomArea>

      {/* 운동하기 폼 */}
      <WorkoutForm />
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.main`
  height: 100%;
  background-color: ${({ theme }) => theme.color.blueLight};
`;

const GaugeArea = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 0 16px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BottomArea = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;
