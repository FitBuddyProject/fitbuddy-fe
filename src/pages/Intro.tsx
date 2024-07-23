import { useNavigate } from "react-router-dom";

import { styled } from "styled-components";
import { Button } from "components/common/Button";
import { ReactComponent as Logo } from "assets/icons/logo.svg";

const IntroContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  svg {
    fill: ${({ theme }) => theme.color.primary};
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
      <Logo width={171} height={38} />
      <Button type="button" color="primary" size="large" onClick={() => navigate("/login")}>
        시작하기
      </Button>
    </IntroContainer>
  );
};

export default Intro;
