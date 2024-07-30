import { useDispatch } from "react-redux";
import { workoutActions } from "store/slices/workout";

import styled from "styled-components";
import Icon from "components/common/Icon";

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

const ActionNav = () => {
  const dispatch = useDispatch();

  const openForm = () => {
    dispatch(workoutActions.openForm());
  };
  return (
    <Container>
      <Box onClick={openForm}>
        <Icon width={30} height={30} icon="LiftingWeights" />
        운동
      </Box>
      <Box>
        <Icon width={30} height={30} icon="Bathtub" />
        샤워
      </Box>
      <Box>
        <Icon width={30} height={30} icon="Bad" />
        잠자기
      </Box>
      <Box>
        <Icon width={30} height={30} icon="ThoughtBalloon" />
        대화
      </Box>
    </Container>
  );
};

export default ActionNav;
