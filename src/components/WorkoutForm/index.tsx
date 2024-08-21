import { RootState } from "store/store";
import { useDispatch, useSelector } from "react-redux";
import { activityActions } from "store/slices/activity";

import { Button } from "components/common/Button/index";
import Icon from "components/common/Icon/Icon";

import {
  Overlay,
  Container,
  TopArea,
  WorkoutCategory,
  Label,
  NameBox,
  Note,
  Wrap,
  TimeInput,
  RadioWrap,
  RadioBox,
} from "./index.styled";
import InputField from "components/common/InputField";

export interface WorkoutProps {
  value: string;
  label: string;
}

const WorkoutForm = () => {
  const dispatch = useDispatch();
  const isShowForm = useSelector((state: RootState) => state.activity.isShowForm);

  const workoutList: WorkoutProps[] = [
    { value: "cardio", label: "🏃‍♂️ 유산소" },
    { value: "gym", label: "🏋️‍♂️️ 헬스" },
    { value: "swimming", label: "🏊‍♂️ 수영" },
    { value: "cycle", label: "🚴‍♂️ 자전거" },
    { value: "climbing", label: "️🧗‍♀️ 클라이밍" },
    { value: "yoga", label: "🧘‍♀ 요가/필라테스" },
    { value: "tennis", label: "🎾️ 테니스" },
    { value: "badminton", label: "🏸 배드민턴" },
    { value: "ball", label: "️⛹️‍♂️ 축구/농구" },
  ];

  const handleClose = () => {
    dispatch(activityActions.showWorkoutForm({ isShowForm: false }));
  };

  const handleSubmit = () => {
    // TODO :: 유효성 검사 및 form submit
    dispatch(activityActions.showWorkoutForm({ isShowForm: false }));
    dispatch(activityActions.activeActivity({ isActive: true }));
  };

  return (
    <Overlay className={isShowForm ? "on" : "off"}>
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
          <InputField
            placeholder="운동 이름을 입력해 주세요 (최대 15자)"
            maxLength={15}
            validationText="중복되는 이름이 있어요."
          />
        </WorkoutCategory>
        {/*  운동 시간 & 운동 강도*/}
        <Wrap>
          <div>
            <Label>운동 시간</Label>
            <TimeInput>
              <InputField type="number" placeholder="60" label="분" />
            </TimeInput>
          </div>
          <div>
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
          </div>
        </Wrap>
        {/*  운동 일지 */}
        <Label>운동 일지</Label>
        <Note placeholder="오늘의 운동 내용을 적어주세요. (최대 300자)" maxLength={300}></Note>
      </Container>
      <Button className="bottom" btnType="square" onClick={handleSubmit}>
        기록 완료
      </Button>
    </Overlay>
  );
};

export default WorkoutForm;
