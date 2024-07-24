import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import styled, { css } from "styled-components";
import Icon from "components/common/Icon";

const HeaderContainer = styled.header<{ inMain: boolean }>`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  ${(props) =>
    props.inMain &&
    css`
      justify-content: space-between;
    `}
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  a {
    display: flex;
  }
`;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [visible, setVisible] = useState(true);
  // TODO :: 페이지별 타이틀 설정
  const [title, setTitle] = useState("title");
  const [isMain, setIsMain] = useState(true);

  useEffect(() => {
    location.pathname === "/intro" ? setVisible(false) : setVisible(true);

    // TODO :: 페이지별 route 헤더 노출 방식 변경 필요
    location.pathname === "/" ? setIsMain(true) : setIsMain(false);
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <HeaderContainer inMain={isMain}>
      {isMain ? (
        <>
          <Icon icon="Logo" width={90} height={20} onClick={() => navigate("/", { replace: true })} />
          <ButtonWrap>
            <Icon icon="IconQuestion" />
            <Link to="my-page">
              <Icon icon="IconSetting" />
            </Link>
          </ButtonWrap>
        </>
      ) : (
        <>
          <Icon icon="IconBack" fill={"none"} onClick={() => navigate(-1)} />
          <h1>{title}</h1>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
