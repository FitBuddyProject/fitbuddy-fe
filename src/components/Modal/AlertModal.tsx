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
    z-index: 100;
`;

const ModalContent = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    max-width: 300px;
    width: 100%;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
`;

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const AlertModal = ({ onClose, children }: ModalProps) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={onClose}>Close</CloseButton>
                {children}
            </ModalContent>
        </ModalOverlay>
    );
};

export default AlertModal;
