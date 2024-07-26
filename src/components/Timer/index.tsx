import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  padding: 1.6rem;
  border-top: 1px solid ${({ theme }) => theme.color.blueGrey03};
`;

const TimeArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  .txt {
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.color.blueGrey50};
  }
  .time {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
const CancelBtn = styled.button`
  border-radius: 5rem;
  padding: 0.4rem 1.2rem;
  background-color: ${({ theme }) => theme.color.blueGrey05};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
const Timer = () => {
  return (
    <Container>
      <TimeArea>
        <span className="txt">남은시간</span>
        <span className="time">01:33:26</span>
      </TimeArea>
      <CancelBtn>운동 취소하기</CancelBtn>
    </Container>
  );
};

export default Timer;
