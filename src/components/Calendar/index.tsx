import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import "./calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CustomCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <StyledCalendar
            onChange={onChange}
            value={value}
            calendarType="gregory"
            view="month"
            prevLabel={null}
            nextLabel={null}
            prev2Label={null}
            next2Label={null}
            showNeighboringMonth={false}
            tileContent={"O"}
        />
    );
};

export default CustomCalendar;

const StyledCalendar = styled(Calendar)`
    border: 0;

    /* 날짜의 글자 스타일 */
    .react-calendar__month-view__days__day-names,
    .react-calendar__month-view__days__day {
        font-size: ${({ theme }) => theme.fontSize.xs};
        line-height: 120%;
        font-weight: 400;
    }

    /* 날짜 간 간격 */
    .react-calendar__month-view__days {
        button {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    /* 선택된 날짜 타일 */
    .react-calendar__tile--active {
        color: ${({ theme }) => theme.color.white};
        background-color: ${({ theme }) => theme.color.primary};
    }

    /* 호버 및 액티브 스타일 */
    .react-calendar__tile--active:active,
    .react-calendar__tile:focus,
    .react-calendar__tile:hover {
    }

    /* 오늘 날짜에 대한 호버 및 액티브 스타일 */
    .react-calendar__tile--now:active,
    .react-calendar__tile--now:hover {
    }

    /* 오늘 날짜 스타일 */
    .react-calendar__tile--now {
        color: ${({ theme }) => theme.color.primary};
        background-color: ${({ theme }) => theme.color.primaryLight};
        border-radius: 50%;
    }

    /* 요일 스타일 */
    .react-calendar__month-view__weekdays abbr {
        font-size: ${({ theme }) => theme.fontSize.xs};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        color: ${({ theme }) => theme.color.blueGrey70};
    }

    .react-calendar__month-view__weekdays__weekday--weekend abbr {
        color: "green";
        background-color: "skyblue";
    }

    /* 토요일 날짜 스타일 */
    .react-calendar__month-view__days__day:not(.react-calendar__month-view__days__day--weekend)
        + .react-calendar__month-view__days__day--weekend:not(.react-calendar__month-view__days__day--neighboringMonth) {
        color: ${({ theme }) => theme.color.blue};
    }
`;
