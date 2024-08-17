import Icon from "components/common/Icon/Icon";
import styled from "styled-components";

const Container = styled.div`
  padding: 0.6rem 1.6rem 1.6rem 1.6rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 1rem 1rem 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const InfoBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.blueGrey03};
  padding: 1rem;
  border-radius: 0.4rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.blueGrey40};
`;

const Calendar = () => {
  return (
    <Container>
      <Icon icon="IconDoubleUp" />
      <InfoBox>
        아직 이번주에 운동을 시작하지 않았어요! <br />
        올망이와 함께 운동을 시작해볼까요?
      </InfoBox>
    </Container>
  );
};

export default Calendar;
