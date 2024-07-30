import { Button } from "components/common/Button";
import Icon from "components/common/Icon";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { workoutActions } from "store/slices/workout";
import { RootState } from "store/store";
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

    > div {
      bottom: 0;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 1rem 1rem 0 0;
  padding: 1.6rem;
  margin-bottom: 5.6rem;
  bottom: -300px;
  transition: 0.25s;
`;

const TopArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const WorkoutCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-bottom: 1rem;
`;

const NameBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  li {
    background-color: ${({ theme }) => theme.color.blueGrey03};
    padding: 0.6rem 1rem;
    border-radius: 5rem;
    width: fit-content;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  .add {
    background-color: ${({ theme }) => theme.color.primaryLight};
    border: 1px solid ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
  }
`;

const InputBox = styled.div`
  width: 100%;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.blueGrey03};
  padding: 1.1rem 1rem;
  input {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.blueGrey30};
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const Validation = styled.span`
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const Note = styled.textarea`
  border-radius: 0.8rem;
  padding: 1rem;
  width: 100%;
  min-height: 12rem;
  height: 12rem;
  background-color: ${({ theme }) => theme.color.blueGrey03};
  border: none;
`;

const Wrap = styled.div`
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
`;

const Time = styled.div``;

const TimeInput = styled.div`
  background-color: ${({ theme }) => theme.color.blueGrey03};
  border-radius: 0.8rem;
`;

const RadioWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const RadioBox = styled.div`
  input {
    display: none;
  }
  label {
    display: block;
    border-radius: 50%;
    padding: 1rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
    background-color: ${({ theme }) => theme.color.blueGrey03};
  }
  input[type=radio]: checked + label {
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.primaryLight};
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`;

const Intensity = styled.div``;

export interface WorkoutProps {
  value: string;
  label: string;
}

const WorkoutForm = () => {
  const dispatch = useDispatch();
  const showForm = useSelector((state: RootState) => state.workout.showForm);

  const workoutList: WorkoutProps[] = [
    { value: "유산소", label: "🏃‍♂️ 유산소" },
    { value: "유산소", label: "🏋️‍♂️️ 헬스" },
    { value: "유산소", label: "🏊‍♂️ 수영" },
    { value: "유산소", label: "🚴‍♂️ 자전거" },
    { value: "유산소", label: "️🧗‍♀️ 클라이밍" },
    { value: "유산소", label: "🧘‍♀ 요가/필라테스" },
    { value: "유산소", label: "🎾️ 테니스" },
    { value: "유산소", label: "🏸 배드민턴" },
    { value: "유산소", label: "️⛹️‍♂️ 축구/농구" },
  ];

  const handleClose = () => {
    dispatch(workoutActions.closeForm());
  };

  return (
    <Overlay className={showForm ? "on" : "off"}>
      <Container>
        <TopArea>
          <h3>운동 기록하기</h3>
          <button onClick={handleClose}>
            <Icon icon="IconClose" />
          </button>
        </TopArea>
        {/*  운동이름 */}
        <WorkoutCategory>
          <Label>운동이름</Label>
          <NameBox>
            {workoutList.map((item) => (
              <li>{item.label}</li>
            ))}
            <li className="add">+ 추가하기</li>
          </NameBox>
          <InputBox>
            <input type="text" placeholder="운동 이름을 입력해 주세요 (최대 15자)" maxLength={15} />
          </InputBox>
          <Validation>중복되는 이름이 있어요.</Validation>
        </WorkoutCategory>
        {/*  운동 시간 & 운동 강도*/}
        <Wrap>
          <Time>
            <Label>운동 시간</Label>
            <TimeInput>
              <InputBox>
                <input type="text" placeholder="60" />
                <span>분</span>
              </InputBox>
            </TimeInput>
          </Time>
          <Intensity>
            <Label>운동 강도</Label>
            <RadioWrap>
              <RadioBox>
                <input id="radio-1" type="radio" name="level" value="high" checked />
                <label htmlFor="radio-1">상</label>
              </RadioBox>
              <RadioBox>
                <input id="radio-2" type="radio" name="level" value="medium" />
                <label htmlFor="radio-2">중</label>
              </RadioBox>
              <RadioBox>
                <input id="radio-3" type="radio" name="level" value="low" />
                <label htmlFor="radio-3">하</label>
              </RadioBox>
            </RadioWrap>
          </Intensity>
        </Wrap>
        {/*  운동 일지 */}
        <Label>운동 일지</Label>
        <Note placeholder="오늘의 운동 내용을 적어주세요. (최대 300자)" maxLength={300}></Note>
      </Container>
      <Button className="bottom" btnType="full">
        기록 완료
      </Button>
    </Overlay>
  );
};

export default WorkoutForm;
