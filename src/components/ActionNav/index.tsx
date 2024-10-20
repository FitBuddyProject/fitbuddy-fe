import { useDispatch } from "react-redux";
import { activityActions } from "store/slices/activity";

import styled from "styled-components";
import Icon, { IconType } from "components/common/Icon/Icon";
import { startAction } from "api/action";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

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
    if (value === "EXERCISE") {
      // 운동하기일 경우 운동일지 작성 폼 작성
      dispatch(activityActions.showWorkoutForm({ isShowForm: true }));
    } else {
      activeAction(value);
      dispatch(activityActions.activeActivity({ isActive: true }));
    }
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
    localStorage.setItem("action", action);
    if (res.status === 200) {
    }
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
