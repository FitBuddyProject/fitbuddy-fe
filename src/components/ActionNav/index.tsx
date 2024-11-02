import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { activityActions } from "store/slices/activity";
import { actionActions } from "store/slices/action/action.slice";

import { startAction } from "api/action";
import useUpdateUserData from "hooks/useUpdateUserData";

import styled from "styled-components";
import Icon from "components/common/Icon/Icon";

const ActionNav = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.auth);
  const { buddy } = useSelector((state: RootState) => state.buddy);
  const { updateExp, updateTired } = useUpdateUserData(userData);

  // 운동하기는 운동일지 작성 폼 작성 먼저 작성
  const handleExerciseAction = () => {
    dispatch(activityActions.showWorkoutForm({ isShowForm: true }));
  };

  // 대화하기
  const handleTalkAction = () => {
    handleStartAction("TALK");
    updateExp(buddy.uuid, 5);
    updateTired(buddy.uuid, 25);
  };

  // 샤워하기, 잠자기
  const handleAction = (value: string) => {
    let timeLeft = 0;
    if (value === "SHOWER") {
      timeLeft = 30;
    } else {
      timeLeft = 120;
    }
    localStorage.setItem("timeLeft", (timeLeft * 60).toString());
    dispatch(activityActions.activeActivity({ action: value }));
    handleStartAction(value);
  };

  const handleStartAction = async (action: string) => {
    const params = {
      userUuid: userData?.uuid,
      myBuddyUuid: buddy.uuid,
      action: action,
      actionStatus: "ON_GOING",
      start: new Date(),
    };
    const res = await startAction(params);
    if (res.status === 200) {
      localStorage.setItem("exercise-uuid", res.data);
      // dispatch(actionActions.setActionUuid(res.data));
    }
  };

  return (
    <Container>
      {/* 운동하기일 경우 운동일지 작성 폼 작성 */}
      <Box onClick={() => handleExerciseAction()}>
        <Icon width={30} height={30} icon="LiftingWeights" />
        운동
      </Box>
      <Box onClick={() => handleAction("SHOWER")}>
        <Icon width={30} height={30} icon="Bathtub" />
        샤워
      </Box>
      <Box onClick={() => handleAction("SLEEP")}>
        <Icon width={30} height={30} icon="Bad" />
        잠자기
      </Box>
      <Box onClick={handleTalkAction}>
        <Icon width={30} height={30} icon="ThoughtBalloon" />
        대화
      </Box>
    </Container>
  );
};

export default ActionNav;

const Container = styled.ul`
  background-color: ${({ theme }) => theme.color.white};
  margin: 1.6rem;
  padding: 1.6rem 0;
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
`;

const Box = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.blueGrey80};
`;
