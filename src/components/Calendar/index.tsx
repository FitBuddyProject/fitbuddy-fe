import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import styled from "styled-components";
import Icon from "components/common/Icon/Icon";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Box = styled.div`
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.color.blueLight};
  width: 100%;
  span {
    color: ${({ theme }) => theme.color.blue};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: 150%;
  }
`;

const CustomCalendar = () => {
  const today = new Date();
  const [value, onChange] = useState<Value>(today);
  const [value2, setValue] = useState<Date>(new Date());

  // 일요일(0) 또는 토요일(6)인지 확인하여 클래스를 지정합니다.
  const tileClassName = ({ date }: any) => {
    if (dayjs(date).format("YYYY-MM-DD") === dayjs(today).format("YYYY-MM-DD")) return "today";
    // 일요일
    if (date.getDay() === 0) return "sunday";

    // 토요일
    if (date.getDay() === 6) return "saturday";

    return "";
  };

  // 운동한날 달력에 표기
  const dayList = ["2024-08-10", "2024-08-21", "2024-08-02", "2024-08-14", "2024-08-27"];
  const addContent = ({ date }: any) => {
    const contents = [];
    if (dayList.find((day) => day === dayjs(date).format("YYYY-MM-DD"))) {
      contents.push(
        <Box>
          <span>O</span>
        </Box>
      );
    }

    return <div style={{ width: "100%" }}>{contents}</div>;
  };

  const onClickDay = () => {
    console.log("onClickDay");
  };
  const [date, setDate] = useState<Date | null>(null);

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(e.target.value);
    const newDate = new Date(value2.getFullYear(), newMonth, 1);
    setValue(newDate);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(e.target.value);
    const newDate = new Date(newYear, value2.getMonth(), 1);
    setValue(newDate);
  };

  return (
    <Container>
      {/* <SelectDate>
        <span>
          {value2.getFullYear()}.{value2.getMonth() + 1}
        </span>
        <Icon icon="RoundArrow" width={30} height={30} />
      </SelectDate> */}

      {/* <div>
        <select onChange={handleMonthChange} value={value2.getMonth()}>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>
              {i + 1}월
            </option>
          ))}
        </select>
        <select onChange={handleYearChange} value={value2.getFullYear()}>
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i} value={value2.getFullYear() + i}>
              {value2.getFullYear() + i}년
            </option>
          ))}
        </select>
      </div> */}
      <StyledCalendar
        calendarType="gregory"
        // view="month"
        value={value}
        formatDay={(locale, date) => dayjs(date).format("DD")}
        tileClassName={tileClassName}
        onChange={onChange}
        onClickDay={onClickDay}
        tileContent={addContent}
        showNeighboringMonth={false}
        prevLabel={null}
        nextLabel={null}
        prev2Label={null}
        next2Label={null}
      />
    </Container>
  );
};

export default CustomCalendar;

const Container = styled.div`
  .react-calendar {
    border: none;
  }

  /* 날짜 선택  */
  .react-calendar__navigation {
    button {
      flex-grow: 0;
    }
  }
`;
const SelectDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const StyledCalendar = styled(Calendar)`
  /* 날짜의 글자 스타일 */
  .react-calendar__month-view__days__day-names,
  .react-calendar__month-view__days__day {
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: 120%;
    font-weight: 400;
  }

  /* 요일 스타일 */
  .react-calendar__month-view__weekdays abbr {
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.color.blueGrey70};
    text-decoration: none;
  }

  /* 주말 요일 스타일 */
  .react-calendar__month-view__weekdays__weekday {
    & abbr[aria-label="일요일"] {
      color: ${({ theme }) => theme.color.error};
    }
    & abbr[aria-label="토요일"] {
      color: ${({ theme }) => theme.color.blue};
    }
  }

  /* 날짜 간 간격 */
  .react-calendar__month-view__days {
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
    }
  }

  /* 호버 및 액티브 스타일 */
  .react-calendar__tile--active:active,
  .react-calendar__tile:focus,
  .react-calendar__tile:hover {
    background: transparent;
  }

  /* 토요일 날짜 스타일 */
  .react-calendar__month-view__days__day--weekend.saturday abbr {
    color: ${({ theme }) => theme.color.blue};
  }

  /* 일요일 날짜 스타일 */
  .react-calendar__month-view__days__day--weekend.sunday abbr {
    color: ${({ theme }) => theme.color.error};
  }

  /* 선택된 날짜 타일 */
  .react-calendar__tile--active,
  .react-calendar__tile:hover {
    background: transparent;
    abbr {
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.primary};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      width: 1.6rem;
      height: 1.6rem;
      line-height: 1.6rem;
    }
  }

  /* 오늘 날짜 스타일 */
  .today {
    background: transparent;
    abbr {
      background-color: ${({ theme }) => theme.color.primaryLight};
      color: ${({ theme }) => theme.color.primary};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      width: 1.6rem;
      height: 1.6rem;
      line-height: 1.6rem;
    }
  }
`;
