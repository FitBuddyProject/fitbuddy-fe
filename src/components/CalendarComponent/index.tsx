import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { WeeklyContainer, Overlay, Container, DetailBox, Top, WorkoutWrap } from "./index.styled";
import Icon from "components/common/Icon/Icon";
import FullCalendar from "components/Calendar/FullCalendar";
import WeeklyCalendar from "components/Calendar/WeeklyCalendar";
import { getCalendar } from "../../api/action";
import { groupBy } from "lodash";
import { IntensityEnum } from "../../common/GeneralEnums";
import { useDispatch } from "react-redux";
import { activityActions } from "../../store/slices/activity";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface CalendarProps {
    today?: Date;
    value?: any;
    setValue?: any;
    onClickDay?: (date: Date) => void;
    onClickMonth?: (date: Date) => void;
    workoutDayList: string[];
}

const initData = {
    exerciseType: "새로운 운동일자를 추가해주세요.", //title
    duration: "-",// duration
    intensity: "-", // intensity
    diary: "운동일지가 비어있습니다." // diary
}

const CalendarComponent = () => {
    const today = new Date();
    const dispatch = useDispatch();
    const [value, setValue] = useState<Value>(today);
    const [workoutDayList, setWorkoutDayList] = useState<string[]>([]);

    // Calender 관련 useState
    const [calendarDate, setCalendarDate] = useState({});
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [isCalendarUp, setIsCalendarUp] = useState<boolean | null>(false);

    const [data, setData] = useState(initData);


    // 달력 display 여부
    const handleClick = (value: boolean) => {
        setIsCalendarUp(value);
    };

    // DESC:: 운동한 날짜 가져오기
    const fetchCalender = async (targetDate: Date) => {
        const year = targetDate.getFullYear().toString();
        const month = (targetDate.getMonth() + 1).toString();
        const userUuid = JSON.parse(localStorage.getItem('userData') || 'null')?.uuid;
        const payload = { year, month, userUuid };

        const resCalendar = await getCalendar(payload);
        if (resCalendar?.status === 200) {
            const { data } = resCalendar;
            const groupByDate = groupBy(data, "date");
            setCalendarDate(groupByDate);
            setWorkoutDayList([...Object.keys(groupByDate)]);
        }
    };

    useEffect(() => {
        setSelectedDate(dayjs(today).format("YYYY-MM-DD")); //
        // TODO :: 운동한 날짜 불러오기
        fetchCalender(today);
    }, []);


    const onClickDay = (date: Date) => {
        const formatedToday = dayjs(date).format("YYYY-MM-DD") // 선택한 날짜.
        setSelectedDate(formatedToday);
        const validDate = (calendarDate as Record<string, any>)?.[formatedToday]
        if(validDate){
            setData(validDate[0]);
        } else {
            setData(initData)
        }
    };

    // 월이 변경될떄
    const onClickMonth = (changedDate: Date) => {
        fetchCalender(changedDate);
    };

    const onClickModifyDiary = () => {
        dispatch(activityActions?.showWorkoutForm({isShowForm: true}));
        dispatch(activityActions?.isWorkoutFormModify({isModify: true}));
    }


    return (
        <>
            {/* 주간 달력 */}
            {!isCalendarUp && (
                <WeeklyContainer>
                    <Icon icon="IconDoubleUp" onClick={() => handleClick(true)}/>
                    <WeeklyCalendar workoutDayList={workoutDayList}/>
                </WeeklyContainer>
            )}

            {/* 전체 달력 */}
            <>
                <Overlay className={isCalendarUp ? "on" : "off"} onClick={() => handleClick(false)}/>
                <Container className={isCalendarUp ? "on" : "off"}>
                    {/* 달력 영역 */}
                    <FullCalendar
                        today={today}
                        value={value}
                        setValue={setValue}
                        onClickDay={onClickDay}
                        onClickMonth={onClickMonth}
                        workoutDayList={workoutDayList}
                    />

                    {/* 상세 내용 */}
                    <DetailBox>
                        <Top>
                            <span>{selectedDate} 운동일지</span>
                            <button onClick={onClickModifyDiary}>수정</button>
                        </Top>

                        <p style={{width: '340px', height: '36px'}}>{data.exerciseType ?? "-"}</p>
                        <WorkoutWrap>
                            <p>{data.diary}</p>
                            <div className="workout-detail">
                                <p>
                                    <span className="label">⌛️운동시간 </span>
                                    <span className="value">{data.duration}분</span>
                                </p>
                                <p>
                                    <span className="label">💪🏻운동강도 </span>
                                    <span className="value">{IntensityEnum?.[data.intensity as keyof typeof IntensityEnum] ?? '-'}</span>
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
