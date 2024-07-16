import styled from "styled-components";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

const ModalContent = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 2rem;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
`;

const CloseButton = styled.button`
    background-color: green;
`;

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={onClose}>Close</CloseButton>
                {children}
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;
