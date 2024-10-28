import { RootState } from "store/store";
import { useDispatch, useSelector } from "react-redux";
import { activityActions } from "store/slices/activity";

import { Button } from "components/common/Button/index";
import Icon from "components/common/Icon/Icon";

import {
  Overlay,
  Container,
  FormContainer,
  TopArea,
  WorkoutCategory,
  Label,
  Note,
  Wrap,
  TimeInput,
  RadioWrap,
  RadioBox,
  WorkoutRadioGroup,
  WorkoutLabel,
} from "./index.styled";
import InputField from "components/common/InputField";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import { stat } from "fs";
import { startAction } from "api/action";

export interface WorkoutOptionProps {
  label: string;
  value: string;
}

// default 운동 항목 리스트
const workoutOptions: WorkoutOptionProps[] = [
  { label: "🏃‍♂️ 유산소", value: "유산소" },
  { label: "🏋️‍♂️️ 헬스", value: "헬스" },
  { label: "🏊‍♂️ 수영", value: "수영" },
  { label: "🚴‍♂️ 자전거", value: "자전거" },
  { label: "️🧗‍♀️ 클라이밍", value: "클라이밍" },
  { label: "🧘‍♀ 요가/필라테스", value: "요가/필라테스" },
  { label: "🎾️ 테니스", value: "테니스" },
  { label: "🏸 배드민턴", value: "배드민턴" },
  { label: "️⛹️‍♂️ 축구/농구", value: "축구/농구" },
  { label: "+ 추가하기", value: "ADD" },
];

const Levels = [
  {
    label: "상",
    value: "STRONG",
  },
  {
    label: "중",
    value: "MEDIUM",
  },
  {
    label: "하",
    value: "WEAK",
  },
];

const initForm = {
  time: "60",
  level: "high",
  workoutName: "",
  contents: ""
}

const WorkoutForm = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.auth);
  const isShowForm = useSelector((state: RootState) => state.activity.isShowForm);
  const isFormModify = useSelector((state: RootState) => state.activity.isModify);
  const formRef = useRef<null | HTMLFormElement>(null);

  const [workoutName, setWorkoutName] = useState(initForm.workoutName);
  const [time, setTime] = useState(initForm.time);
  const [level, setLevel] = useState(initForm.level);
  const [contents, setContents] = useState(initForm.contents);
  const [isAddWorkout, setIsAddWorkout] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);


  const clearInputs = () => {
    console.log("clear")
    setContents(initForm.contents);
    setLevel(initForm.level);
    setTime(initForm.time);
    setWorkoutName(initForm.workoutName);
  }

  // 운동하기 폼 닫기
  const handleClose = () => {
    clearInputs();
    dispatch(activityActions.showWorkoutForm({ isShowForm: false }));
    dispatch(activityActions?.isWorkoutFormModify({isModify: false}));
  };

  // 기록 완료 저장
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const params = {
        userUuid: userData?.uuid,
        myBuddyUuid: userData?.uuid,
        action: "EXERCISE",
        actionStatus: "ON_GOING",
        start: new Date(),
        athlete: {
          exerciseType: formData.get("name") as string,
          duration: formData.get("time") as string,
          intensity: formData.get("level") as string,
          diary: formData.get("contents") as string,
        },
      };

      const res = await startAction(params);
      if (res.status === 200) {
        dispatch(activityActions.showWorkoutForm({ isShowForm: false }));
        dispatch(activityActions.activeActivity({ action: "EXERCISE" }));
        localStorage.setItem("timeLeft", (60 * 60).toString());
        localStorage.setItem('exercise-uuid', res.data);
      }
    }
  };

  // 운동 이름 선택
  const handleSelectLabel = (value: string) => {
    setSelected(value);
    if (value === "ADD") {
      setIsAddWorkout(true);
    } else {
      setIsAddWorkout(false);
    }
    setWorkoutName(value);
  };

  const validateInput = (input: string) => {
    const exists = workoutOptions.some((option) => option.value === input.trim());
    if (exists) {
      setError("중복되는 이름이 있어요.");
    } else {
      setError(null);
    }
  };

  const debouncedValidate = debounce((input: string) => {
    validateInput(input);
  }, 300); // 300ms 대기

  useEffect(() => {
    debouncedValidate(workoutName);
    return () => {
      debouncedValidate.cancel(); // 컴포넌트 언마운트 시 debounce 취소
    };
  }, [workoutName, debouncedValidate]);

  return (
    <>
      <Overlay className={isShowForm ? "on" : "off"} />
      <Container className={isShowForm ? "on" : "off"}>
        <TopArea>
          <h3>운동 기록하기</h3>
          <button onClick={handleClose}>
            <Icon icon="IconClose" />
          </button>
        </TopArea>
        {/*  운동이름 */}
        <FormContainer onSubmit={handleSubmit} ref={formRef}>
          <WorkoutCategory>
            <Label>운동이름</Label>
            <WorkoutRadioGroup>
              {workoutOptions.map((option) => (
                <WorkoutLabel
                  key={option.value}
                  selected={selected === option.value}
                  onClick={() => handleSelectLabel(option.value)}
                >
                  <input type="radio" name="activity" value={option.label} checked={selected === option.label} />
                  <span>{option.label}</span>
                </WorkoutLabel>
              ))}
            </WorkoutRadioGroup>
            {isAddWorkout && (
              <InputField
                placeholder="운동 이름을 입력해 주세요 (최대 15자)"
                maxLength={15}
                validationText={error as string}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWorkoutName(e.target.value)}
              />
            )}
          </WorkoutCategory>
          <Wrap>
            <div>
              {/*  운동 시간 */}
              <Label>운동 시간</Label>
              <TimeInput>
                <InputField
                  type="number"
                  placeholder="60"
                  label="분"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTime(e.target.value)}
                />
              </TimeInput>
            </div>
            <div>
              {/* 운동 강도 */}
              <Label>운동 강도</Label>
              <RadioWrap>
                <RadioBox>
                  <input id="radio-1" type="radio" name="level" value="high" checked />
                  <label htmlFor="radio-1">상</label>
                </RadioBox>
                <RadioBox>
                  <input id="radio-2" type="radio" name="level" value="middle" />
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
          <Note
            placeholder="오늘의 운동 내용을 적어주세요. (최대 300자)"
            maxLength={300}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContents(e.target.value)}
          ></Note>

          {/* 기록 저장 버튼 */}
          <Button className="bottom" type="submit" btnType="square" onClick={handleSubmit}>
            기록 완료
          </Button>
        </FormContainer>
      </Container>
    </>
  );
};

export default WorkoutForm;
