import { useState } from "react";
import Icon from "components/common/Icon/Icon";
import styled from "styled-components";

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  left: 0;

  visibility: hidden;
  opacity: 0;
  transition: 0.25s;

  &.on {
    visibility: visible;
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  // padding: 0.6rem 1.6rem 1.6rem 1.6rem;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 1rem 1rem 0 0;
  display: flex;
  // align-items: center;
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

const SelectDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const DetailBox = styled.div`
  border: 1px solid ${({ theme }) => theme.color.blueGrey05};
  border-radius: 0.6rem;
  padding: 0.8rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    line-height: 130%;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  span {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.color.blue};
  }

  button {
    background-color: ${({ theme }) => theme.color.blueGrey05};
    border-radius: 5rem;
    padding: 0.4rem 1.2rem;
  }
`;

const WorkoutWrap = styled.div`
  background-color: ${({ theme }) => theme.color.blueGrey03};
  padding: 1rem;
`;

const Calendar = () => {
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
            {/* 달력 영역 */}
            <div>
              <SelectDate>
                <span>2024. 07</span>
                <Icon icon="RoundArrow" width={30} height={30} />
              </SelectDate>
            </div>
            {/* 상세 내용 */}
            <DetailBox>
              <Top>
                <span>2024. 07. 12 운동일지</span>
                <button>수정</button>
              </Top>
              <p>내용입니다 내용내용내용입니다 내용내용내용입니다 내용내용내용입니다 내용내용</p>
              <WorkoutWrap>
                <p>블라블라블라</p>
                <div></div>
              </WorkoutWrap>
            </DetailBox>
          </div>
        )}
      </Container>
    </>
  );
};

export default Calendar;
