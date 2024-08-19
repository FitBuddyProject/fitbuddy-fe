import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { RootState } from "store/store";
import { modalActions } from "store/slices/modal";
import Modal from "components/Modal/Modal";
import { theme } from "styles/theme";
import { activityActions } from "store/slices/activity";

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
const Timer = () => {
  const dispatch = useDispatch();
  const { showModal } = useSelector((state: RootState) => state.modal);

  const openModal = () => {
    dispatch(modalActions.openModal());
  };

  const handelCancel = () => {
    // TODO :: 운동 취소 api
    dispatch(modalActions.closeModal());
    console.log("운동 취소");
    dispatch(activityActions.activeActivity({ isActive: false }));
  };

  return (
    <>
      <Container>
        <TimeArea>
          <span className="txt">남은시간</span>
          <span className="time">01:33:26</span>
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
