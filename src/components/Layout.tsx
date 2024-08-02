import styled from "styled-components";

import Header from "../components/Header";
import NotificationModal from "components/Modal/NotificationModal";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  main {
    flex: 1;
    overflow-y: auto;
  }
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      {/* 메인 영역 */}
      {children}

      <NotificationModal />
    </LayoutContainer>
  );
};

export default Layout;
