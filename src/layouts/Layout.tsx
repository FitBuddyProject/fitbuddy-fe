import styled from "styled-components";

import Header from "./Header";
import MainContent from "./MainContent";

interface LayoutProps {
    children: React.ReactNode;
}

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Layout = ({ children }: LayoutProps) => {
    return (
        <LayoutContainer>
            <Header />
            <MainContent>{children}</MainContent>
        </LayoutContainer>
    );
};

export default Layout;
