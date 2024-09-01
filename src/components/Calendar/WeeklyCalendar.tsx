import styled from "styled-components";
import { CalendarProps } from "components/CalendarComponent";

const WeeklyCalendar = ({ workoutDayList }: CalendarProps) => {
  const today = new Date();

  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1)); // 이번 주 월요일
  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return {
      dateString: date.toISOString().split("T")[0],
      day: date.toLocaleDateString("ko-KR", { weekday: "short" }), // 요일 이름
    };
  });

  const hasWorkoutDays = daysOfWeek.some(({ dateString }) => workoutDayList.includes(dateString));

  return (
    <>
      <Container>
        {daysOfWeek.map(({ dateString, day }) => (
          <CalendarWrap key={dateString}>
            <Day>{day}</Day>
            {workoutDayList.includes(dateString) && (
              <Box>
                <span>O</span>
              </Box>
            )}
          </CalendarWrap>
        ))}
      </Container>
      {/* 이번주 운동을 시작하지 않았을 경우 */}
      {!hasWorkoutDays && (
        <InfoBox>
          아직 이번주에 운동을 시작하지 않았어요! <br />
          올망이와 함께 운동을 시작해볼까요?
        </InfoBox>
      )}
    </>
  );
};

export default WeeklyCalendar;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const CalendarWrap = styled.div`
  flex: 1 1 auto;
`;

const Day = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.blueGrey70};
  width: 100%;
`;

const Box = styled.div`
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.color.blueLight};
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: ${({ theme }) => theme.color.blue};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
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
