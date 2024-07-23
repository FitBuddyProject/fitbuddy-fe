import { Button } from "components/common/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const IntroContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: ${({ theme }) => theme.fontSize.title};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.primary};
  }
  button {
    position: fixed;
    bottom: 16px;
  }
`;

const Intro = () => {
  const navigate = useNavigate();

  return (
    <IntroContainer>
      <h1>Fit Buddy</h1>
      <Button type="button" color="primary" size="large" onClick={() => navigate("/")}>
        시작하기
      </Button>
    </IntroContainer>
  );
};

export default Intro;
