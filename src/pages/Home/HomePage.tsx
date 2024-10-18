import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getDetail } from "api/action";

import ActionNav from "components/ActionNav";
import BuddyComponent from "components/BuddyComponent";
import ProgressBar from "components/ProgressBar";
import Timer from "components/Timer";
import WorkoutForm from "components/WorkoutForm";

import styled from "styled-components";
import { theme } from "styles/theme";
import { getBuddies } from "api/buddy";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { buddyActions } from "store/slices/buddy/buddy.slice";
import CalendarComponent from "components/CalendarComponent";

const Home = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.auth);
  const { buddy } = useSelector((state: RootState) => state.buddy);
  const [character, setCharacter] = useState("");
  const { isActive } = useSelector((state: RootState) => state.activity);

  const fetchDetail = async () => {
    const res = await getDetail({ uuid: userData?.uuid });
    console.log(res);
  };

  useEffect(() => {
    if (!userData) return;

    const fetchBuddies = async () => {
      const res = await getBuddies({ uuid: userData.uuid });
      dispatch(buddyActions.getBuddiesSuccess(res.data));
    };

    fetchBuddies();
    fetchDetail();
    getFileName();
  }, [dispatch, userData]);

  const getFileName = () => {
    if (!buddy) return;
    let type = "";
    switch (buddy.buddy) {
      case "CHICKEN":
        type = "chick";
        break;
      case "OTTER":
        type = "otter";
        break;
      case "MONSTER":
        type = "monster";
        break;
    }
    setCharacter(`${type}_lv_1`);
  };

  return (
    <MainContainer>
      {/* 게이지 영역 */}
      <GaugeArea>
        <ProgressBar label={`레벨${1}`} value={1} color={theme.color.primary} />
        <ProgressBar label="피로도" value={1} color={theme.color.error} />
      </GaugeArea>

      {/* 운동 시간 영역 */}
      {isActive && <Timer />}

      {/* 캐릭터 영역 */}
      <BuddyComponent fileName={character} level={1} name={"임시이름"} />

      {/* 행동 영역 */}
      <ActionNav />

      {/* 운동하기 폼 */}
      <WorkoutForm />

      {/* 달력 영역 */}
      <CalendarComponent />
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
