import Calendar from "react-calendar";
import styled from "styled-components";
import RoundArrow from "../../assets/icons/round-arrow.svg";

const StyledCalendar = styled(Calendar)`
  border: none;

  /* 날짜 선택 스타일 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 800;
    position: relative;

    // 화살표 아이콘
    &::after {
      content: "";
      display: inline-block;
      width: 24px;
      height: 24px;
      background-image: url(${RoundArrow});
      background-size: cover;
      margin-left: 0.6rem;
      vertical-align: middle;
    }
  }

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

  /* 오늘 날짜 스타일 */
  .react-calendar__tile--now:not(.today) {
    background-color: ${({ theme }) => theme.color.primaryLight};
  }

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

  /* 호버 및 액티브 스타일 */
  .react-calendar__tile--active:active,
  .react-calendar__tile:focus,
  .react-calendar__tile:hover {
    background: transparent;
  }
`;

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

export { StyledCalendar, Box };
