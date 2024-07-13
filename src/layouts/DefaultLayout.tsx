import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;


const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default DefaultLayout;
