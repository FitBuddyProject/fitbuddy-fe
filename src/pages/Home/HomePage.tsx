import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { modalActions } from "store/slices/modal";

import styled from "styled-components";
import { theme } from "styles/theme";

import ProgressBar from "components/ProgressBar";
import Timer from "components/Timer";
import BuddyComponent from "components/BuddyComponent";
import Calendar from "components/Calendar";
import ActionNav from "components/ActionNav";
import WorkoutForm from "components/WorkoutForm";

const Home = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state: RootState) => state.activity.isActive);

  const handlePet = () => {
    dispatch(
      modalActions.pushNotificationModal({
        // content: `쓰다듬어줘서 고마워요.\n내일 다시 쓰다듬어 주세요.🥰`,
        content: `쓰다듬어줘서 고마워요.\n내일 다시 쓰다듬어 주세요.🥰`,
        subContent: `피로도 -2 경험치 +6`,
      })
    );
  };

  return (
    <MainContainer>
      {/* 게이지 영역 */}
      <GaugeArea>
        <ProgressBar label="레벨1" value={90} color={theme.color.primary} />
        <ProgressBar label="피로도" value={30} color={theme.color.error} />
      </GaugeArea>

      {/* 운동 시간 영역 */}
      {isActive ?? <Timer />}

      {/* 캐릭터 영역 */}
      <BuddyComponent />

      <div className="bottom-wrap">
        {/* 행동 영역 */}
        {!isActive ?? <ActionNav />}

        {/* 달력 영역 */}
        <Calendar />
      </div>

      {/* 운동하기 폼 */}
      <WorkoutForm />
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.main`
  height: 100%;
  background-color: ${({ theme }) => theme.color.blueLight};

  .bottom-wrap {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
`;

const GaugeArea = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 0 16px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
