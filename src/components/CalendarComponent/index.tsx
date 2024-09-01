import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { WeeklyContainer, Overlay, Container, DetailBox, Top, WorkoutWrap } from "./index.styled";
import Icon from "components/common/Icon/Icon";
import FullCalendar from "components/Calendar/FullCalendar";
import WeeklyCalendar from "components/Calendar/WeeklyCalendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface CalendarProps {
  today?: Date;
  value?: any;
  setValue?: any;
  onClickDay?: (date: Date) => void;
  workoutDayList: string[];
}

const CalendarComponent = ({ isCalendarUp, setIsCalendarUp }: any) => {
  const today = new Date();
  const [value, setValue] = useState<Value>(today);
  const [workoutDayList, setWorkoutDayList] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const data = {
    contents: "내용입니다 내용내용내용입니다 내용내용내용입니다 내용내용내용입니다 내용내용",
    time: "30",
    level: "상",
    description: "운동내용내용",
  };

  // 달력 display 여부
  const handleClick = (value: boolean) => {
    setIsCalendarUp(value);
  };

  useEffect(() => {
    setSelectedDate(dayjs(today).format("YYYY-MM-DD"));
  }, []);

  const onClickDay = (date: Date) => {
    setSelectedDate(dayjs(date).format("YYYY-MM-DD"));

    // TODO :: 해당하는 날짜 데이터 불러오기
  };

  useEffect(() => {
    // TODO :: 운동한 날짜 불러오기
    setWorkoutDayList(["2024-08-10", "2024-08-21", "2024-08-02", "2024-08-14", "2024-08-27"]);
  }, []);

  return (
    <>
      {/* 주간 달력 */}
      {!isCalendarUp && (
        <WeeklyContainer>
          <Icon icon="IconDoubleUp" onClick={() => handleClick(true)} />
          <WeeklyCalendar workoutDayList={workoutDayList} />
        </WeeklyContainer>
      )}

      {/* 전체 달력 */}
      <>
        <Overlay className={isCalendarUp ? "on" : "off"} onClick={() => handleClick(false)} />
        <Container className={isCalendarUp ? "on" : "off"}>
          {/* 달력 영역 */}
          <FullCalendar
            today={today}
            value={value}
            setValue={setValue}
            onClickDay={onClickDay}
            workoutDayList={workoutDayList}
          />

          {/* 상세 내용 */}
          <DetailBox>
            <Top>
              <span>{selectedDate} 운동일지</span>
            </Top>
            <p>{data.contents}</p>
            <WorkoutWrap>
              <p>{data.description}</p>
              <div className="workout-detail">
                <p>
                  <span className="label">⌛️운동시간 </span>
                  <span className="value">{data.time}분</span>
                </p>
                <p>
                  <span className="label">💪🏻운동강도 </span>
                  <span className="value">{data.level}</span>
                </p>
              </div>
            </WorkoutWrap>
          </DetailBox>
        </Container>
      </>
    </>
  );
};

export default CalendarComponent;
