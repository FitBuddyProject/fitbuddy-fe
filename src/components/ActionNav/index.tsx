import { useDispatch } from "react-redux";
import { activityActions } from "store/slices/activity";

import styled from "styled-components";
import Icon, { IconType } from "components/common/Icon/Icon";

type ActionProps = {
  value: string;
  label: string;
  icon: IconType;
};

const ActionNav = () => {
  const dispatch = useDispatch();

  // 활동 네비게이션 목록
  const actionList: ActionProps[] = [
    {
      label: "운동",
      value: "workout",
      icon: "LiftingWeights",
    },
    {
      label: "샤워",
      value: "shower",
      icon: "Bathtub",
    },
    {
      label: "잠자기",
      value: "sleep",
      icon: "Bad",
    },
    {
      label: "대화",
      value: "talk",
      icon: "ThoughtBalloon",
    },
  ];

  const openForm = (value: string) => {
    switch (value) {
      case "workout":
        return dispatch(activityActions.showWorkoutForm({ isShowForm: true }));
      default:
        return dispatch(activityActions.activeActivity({ isActive: true }));
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
