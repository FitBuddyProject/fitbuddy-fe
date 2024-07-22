import { ReactNode } from "react";
import styled from "styled-components";

interface MainContentProps {
    children: ReactNode;
}

const MainContainer = styled.main`
    flex: 1;
    overflow-y: auto;
`;

const MainContent = ({ children }: MainContentProps) => {
    return <MainContainer>{children}</MainContainer>;
};

export default MainContent;
