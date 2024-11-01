import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { RootState } from "store/store";
import { modalActions } from "store/slices/modal";
import Modal from "components/Modal/Modal";
import { theme } from "styles/theme";
import { activityActions } from "store/slices/activity";
import { cancelAction, doneAction } from "api/action";
import { useEffect, useState } from "react";
import { earnExp } from "api/buddy";

const Timer = () => {
  const dispatch = useDispatch();
  const { showModal } = useSelector((state: RootState) => state.modal);
  const { userData } = useSelector((state: RootState) => state.auth);
  const { action, isActive } = useSelector((state: RootState) => state.activity);
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const savedTime = localStorage.getItem("timeLeft");
    return savedTime ? parseInt(savedTime, 10) : 0;
  });

  useEffect(() => {
    if (isActive) {
      let timer: NodeJS.Timeout;

      if (isActive && timeLeft > 0) {
        timer = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
      } else if (timeLeft === 0) {
        handleTimerEnd();
      }

      localStorage.setItem("timeLeft", timeLeft.toString());

      return () => clearInterval(timer);
    }
  }, [isActive, timeLeft]);

  // 액션 취소 컨펌 팝업
  const openModal = () => {
    dispatch(modalActions.openModal());
  };

  // 액션 취소
  const handelCancel = async () => {
    const params = {
      userUuid: userData?.uuid,
      uuid: localStorage.getItem("exercise-uuid"),
      myBuddyUuid: userData?.uuid,
      action: action,
      actionStatus: "CANCEL",
      end: new Date(),
    };
    const res = await cancelAction(params);
    if (res.status === 200) {
      localStorage.removeItem("exercise-uuid");
      dispatch(modalActions.closeModal());
      dispatch(activityActions.inactiveActivity());
      localStorage.removeItem("exercise-uuid");
    }
  };

  // 액션 종료
  const handleTimerEnd = async () => {
    const params = {
      userUuid: userData?.uuid,
      myBuddyUuid: userData?.uuid,
      uuid: localStorage.getItem("exercise-uuid"),
      action: action,
      actionStatus: "DONE",
      end: new Date(),
    };
    const res = await doneAction(params);
    console.log("doneAction:: {}", res);
    if (res.status === 200) {
      dispatch(activityActions.inactiveActivity());
      localStorage.removeItem("timeLeft");
      localStorage.removeItem("exercise-uuid");
      handleExp();
    }
  };

  const handleExp = async () => {
    const params = {
      uuid: userData?.uuid,
      exp: action === "SHOWER" ? 5 : 0,
    };
    const res = await earnExp(params);
    console.log("earnExp :: {}", res);
  };

  // 시간 포맷
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  return (
    <>
      <Container>
        <TimeArea>
          <span className="txt">남은시간</span>
          <span className="time">{formatTime(timeLeft)}</span>
        </TimeArea>
        <CancelBtn onClick={openModal}>운동 취소하기</CancelBtn>
      </Container>
      {showModal && (
        <Modal type="confirm" confirmText="확인" handleConfirm={handelCancel}>
          <h3>취소 하시겠습니까?</h3>
          <div className="content">
            <p>
              지금 취소하면 경험치는 원래 받는 것의 <br />
              <span style={{ color: theme.color.blue }}>NN%</span>만 얻을 수 있어요
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Timer;

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  padding: 1.6rem;
  border-top: 1px solid ${({ theme }) => theme.color.blueGrey03};
`;

const TimeArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  .txt {
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.color.blueGrey50};
  }
  .time {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
const CancelBtn = styled.button`
  border-radius: 5rem;
  padding: 0.4rem 1.2rem;
  background-color: ${({ theme }) => theme.color.blueGrey05};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
