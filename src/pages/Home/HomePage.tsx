import ActionNav from "components/ActionNav";
import Calendar from "components/Calendar";
import CanvasComponent from "components/Object/Canvas";
import ProgressBar from "components/ProgressBar";
import Timer from "components/Timer";
import styled from "styled-components";
import { theme } from "styles/theme";

const MainContainer = styled.main`
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

const Home = () => {
  return (
    <MainContainer>
      {/* 게이지 영역 */}
      <GaugeArea>
        <ProgressBar label="레벨1" value={90} color={theme.color.primary} />
        <ProgressBar label="피로도" value={30} color={theme.color.error} />
      </GaugeArea>

      {/* 운동 시간 영역 */}
      <Timer />

      {/* 캐릭터 영역 */}
      <CanvasComponent />

      {/* 행동 영역 */}
      <ActionNav />

      {/* 달력 영역 */}
      <Calendar />
    </MainContainer>
  );
};

export default Home;
