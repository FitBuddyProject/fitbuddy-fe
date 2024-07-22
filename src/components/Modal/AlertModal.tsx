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
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    width: 312px;
    height: 196px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    transform: translate(-50%, -50%);
    text-align: center;
`;

const ModalHeader = styled.div``;
const ModalBody = styled.div``;

const ModalFooter = styled.div`
    display: flex;
    align-items: flex-end;
`;

const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    background-color: ${(props) => props.color};
`;

interface AlertModalProps {
    title?: string;
    message?: string;
    closeText?: string;
    confirmText?: string;
    isConfirm?: boolean;
    modalClose?: () => void;
}

const AlertModal = ({ title, message, modalClose }: AlertModalProps) => {
    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalHeader>
                    <h3>{title}</h3>
                </ModalHeader>
                <ModalBody>
                    <p>{message}</p>
                </ModalBody>
                <ModalFooter>
                    <CloseButton onClick={modalClose}>닫기</CloseButton>
                    <CloseButton color="orange" onClick={modalClose}>
                        닫기
                    </CloseButton>
                </ModalFooter>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default AlertModal;
