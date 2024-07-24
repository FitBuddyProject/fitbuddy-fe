import CanvasComponent from "components/Object/Canvas";
import ProgressBar from "components/ProgressBar";
import styled from "styled-components";
import { theme } from "styles/theme";

const MainContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.color.blueLight};
`;

const GaugeArea = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 0 16px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <GaugeArea>
        <ProgressBar label="레벨1" value={90} color={theme.color.primary} />
        <ProgressBar label="피로도" value={30} color={theme.color.error} />
      </GaugeArea>
      <CanvasComponent />
    </MainContainer>
  );
};

export default MainPage;
