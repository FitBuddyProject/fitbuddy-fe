import { useDispatch } from "react-redux";
import { modalActions } from "store/slices/modal";
import styled from "styled-components";

const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalContainer = styled.div`
  width: 100%;
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
`;

const ModalHeader = styled.div`
  height: 4rem;
  padding: 1.6rem 1.6rem 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
const ModalBody = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: flex-end;
  button {
    width: 100%;
    padding: 1.6rem 0;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  background-color: ${({ theme }) => theme.color.blueGrey05};
`;

const ConfirmButton = styled.button`
  background-color: ${(props) => (props.color ? props.color : props.theme.color.primary)};
  color: ${({ theme }) => theme.color.white};
`;

interface AlertModalProps {
  type: "alert" | "confirm";
  title?: string;
  content?: string;
  closeText?: string;
  confirmText?: string;
  confirmColor?: string;
  isConfirm?: boolean;
  handleConfirm?: () => void;
}

const Modal = ({
  type,
  title,
  content,
  closeText = "닫기",
  confirmText,
  confirmColor,
  handleConfirm,
}: AlertModalProps) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(modalActions.closeModal());
  };
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h3>{title}</h3>
        </ModalHeader>
        <ModalBody>
          <p>{content}</p>
        </ModalBody>
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
