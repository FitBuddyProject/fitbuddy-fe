import { useState } from "react";

import { Overlay, Container, InfoBox, SelectDate, DetailBox, Top, WorkoutWrap } from "./index.styled";
import Icon from "components/common/Icon/Icon";
import CustomCalendar from "components/Calendar";

const CalendarComponent = () => {
    const [isUp, setIsUp] = useState(true);

    const handleClick = (value: boolean) => {
        setIsUp(value);
    };
    return (
        <>
            <Overlay className={isUp ? "on" : "off"} onClick={() => handleClick(false)} />
            <Container>
                {!isUp ? (
                    // 달력 작게
                    <>
                        <Icon icon="IconDoubleUp" onClick={() => handleClick(true)} />
                        <InfoBox>
                            아직 이번주에 운동을 시작하지 않았어요! <br />
                            올망이와 함께 운동을 시작해볼까요?
                        </InfoBox>
                    </>
                ) : (
                    // 달력 크게
                    <div>
                        <SelectDate>
                            <span>2024. 07</span>
                            <Icon icon="RoundArrow" width={30} height={30} />
                        </SelectDate>

                        {/* 달력 영역 */}
                        <CustomCalendar />

                        {/* 상세 내용 */}
                        <DetailBox>
                            <Top>
                                <span>2024. 07. 12 운동일지</span>
                                <button>수정</button>
                            </Top>
                            <p>내용입니다 내용내용내용입니다 내용내용내용입니다 내용내용내용입니다 내용내용</p>
                            <WorkoutWrap>
                                <p>블라블라블라</p>
                                <div className="workout-detail">
                                    <p>
                                        <span className="label">⌛️운동시간 </span>
                                        <span className="value">60분</span>
                                    </p>
                                    <p>
                                        <span className="label">💪🏻운동강도 </span>
                                        <span className="value">상</span>
                                    </p>
                                </div>
                            </WorkoutWrap>
                        </DetailBox>
                    </div>
                )}
            </Container>
        </>
    );
};

export default CalendarComponent;
