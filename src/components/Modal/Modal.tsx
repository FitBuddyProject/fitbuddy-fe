import { useDispatch } from "react-redux";
import { modalActions } from "store/slices/modal";
import styled from "styled-components";

const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalContainer = styled.div`
  width: 31.2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  text-align: center;

  h3 {
    height: 4rem;
    padding: 1.6rem 1.6rem 1.6rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  .content {
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    white-space: pre;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: flex-end;
  button {
    width: 100%;
    padding: 1.6rem 0;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    &:first-child {
      border-bottom-left-radius: 1rem;
    }
    &:last-child {
      border-bottom-right-radius: 1rem;
    }
  }
`;

const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.color.blueGrey05};
`;

const ConfirmButton = styled.button`
  background-color: ${(props) => (props.color ? props.color : props.theme.color.primary)};
  color: ${({ theme }) => theme.color.white};
`;

interface AlertModalProps {
  type: "alert" | "confirm";
  closeText?: string;
  confirmText?: string;
  confirmColor?: string;
  isConfirm?: boolean;
  handleConfirm?: () => void;
  children: React.ReactNode;
}

const Modal = ({ type, closeText = "닫기", confirmText, confirmColor, handleConfirm, children }: AlertModalProps) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(modalActions.closeModal());
  };
  return (
    <ModalOverlay>
      <ModalContainer>
        {/* 타이틀, 내용 영역 */}
        {children}
        {/* 버튼 영역 */}
        <ButtonWrap>
          {type === "confirm" && <CloseButton onClick={handleClose}>{closeText}</CloseButton>}
          <ConfirmButton color={confirmColor} onClick={handleConfirm}>
            {confirmText}
          </ConfirmButton>
        </ButtonWrap>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
