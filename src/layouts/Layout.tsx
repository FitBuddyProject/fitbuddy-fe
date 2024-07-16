import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import { ReactNode, useState } from "react";
import AlertModal from "components/Modal/AlertModal";

interface LayoutProps {
    children: ReactNode;
}

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const DefaultLayout = ({ children }: LayoutProps) => {
    // TODO :: store로 관리 필요
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <LayoutContainer>
            <Header />
            <MainContent>{children}</MainContent>
            <button onClick={toggleModal}>open Modal</button>
            {isModalOpen && (
                <AlertModal onClose={toggleModal}>
                    <h2>This is a modal</h2>
                    <p>You can add any content here.</p>
                </AlertModal>
            )}
        </LayoutContainer>
    );
};

export default DefaultLayout;
