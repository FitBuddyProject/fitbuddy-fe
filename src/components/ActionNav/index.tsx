import { useDispatch } from "react-redux";
import { activityActions } from "store/slices/activity";

import styled from "styled-components";
import Icon, { IconType } from "components/common/Icon/Icon";
import { startAction } from "api/action";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { earnExp } from "api/buddy";

type ActionProps = {
  value: string;
  label: string;
  icon: IconType;
};

const ActionNav = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.auth);

  // 활동 네비게이션 목록
  const actionList: ActionProps[] = [
    {
      label: "운동",
      value: "EXERCISE",
      icon: "LiftingWeights",
    },
    {
      label: "샤워",
      value: "SHOWER",
      icon: "Bathtub",
    },
    {
      label: "잠자기",
      value: "SLEEP",
      icon: "Bad",
    },
    {
      label: "대화",
      value: "TALK",
      icon: "ThoughtBalloon",
    },
  ];

  const openForm = (value: string) => {
    // timeLeft;
    if (value === "EXERCISE") {
      // 운동하기일 경우 운동일지 작성 폼 작성
      dispatch(activityActions.showWorkoutForm({ isShowForm: true }));
    } else {
      activeAction(value);

      if (value === "TALK") {
        handleExp();
      }

      let timeLeft = 0;
      switch (value) {
        case "SHOWER":
          timeLeft = 0.1;
          dispatch(activityActions.activeActivity({ action: value }));
          break;
        case "SLEEP":
          timeLeft = 120;
          dispatch(activityActions.activeActivity({ action: value }));
          break;
      }

      // 대화하기는 경험치만 올림
      if (timeLeft !== 0) {
        localStorage.setItem("timeLeft", (timeLeft * 60).toString());
      }
    }
  };

  const handleExp = async () => {
    const params = {
      uuid: userData?.uuid,
      exp: 5,
    };
    const res = await earnExp(params);
    console.log("earnExp :: {}", res);
  };

  const activeAction = async (action: string) => {
    const params = {
      userUuid: userData?.uuid,
      myBuddyUuid: userData?.uuid,
      action: action,
      actionStatus: "ON_GOING",
      start: new Date(),
    };
    const res = await startAction(params);
    localStorage.setItem('exercise-uuid', res.data);
  };
  return (
    <Container>
      {actionList.map((action: ActionProps) => (
        <Box key={action.value} onClick={() => openForm(action.value)}>
          <Icon width={30} height={30} icon={action.icon} />
          {action.label}
        </Box>
      ))}
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
