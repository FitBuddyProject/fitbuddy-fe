import "react-calendar/dist/Calendar.css";
import { StyledCalendar, Box } from "./calendar.styled";
import dayjs from "dayjs";
import { CalendarProps } from "components/CalendarComponent";

const FullCalendar = ({ today, value, setValue, onClickDay, workoutDayList }: CalendarProps) => {
  // 클래스를 지정합니다.
  const tileClassName = ({ date }: any) => {
    if (dayjs(date).format("YYYY-MM-DD") === dayjs(today).format("YYYY-MM-DD")) return "today";
    // 일요일 (0)
    if (date.getDay() === 0) return "sunday";

    // 토요일 (6)
    if (date.getDay() === 6) return "saturday";

    return "";
  };

  // 운동한 일자 표시
  const addContent = ({ date }: any) => {
    const contents = [];
    if (workoutDayList.find((day: any) => day === dayjs(date).format("YYYY-MM-DD"))) {
      contents.push(
        <Box>
          <span>O</span>
        </Box>
      );
    }

    return <div style={{ width: "100%" }}>{contents}</div>;
  };

  return (
    <StyledCalendar
      calendarType="gregory"
      value={value}
      formatDay={(locale, date) => dayjs(date).format("DD")}
      tileClassName={tileClassName}
      onChange={setValue}
      onClickDay={onClickDay}
      tileContent={addContent}
      showNeighboringMonth={false}
      prevLabel={null}
      nextLabel={null}
      prev2Label={null}
      next2Label={null}
    />
  );
};

export default FullCalendar;
