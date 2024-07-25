import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import styled, { css } from "styled-components";
import Icon from "components/common/Icon";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const HeaderContainer = styled.header<{ inMain: boolean }>`
  height: 5.6rem;
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
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
  gap: 1rem;
  cursor: pointer;
  a {
    display: flex;
  }
`;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { title } = useSelector((state: RootState) => state.header);

  const [visible, setVisible] = useState(true);
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
            <Link to="info">
              <Icon icon="IconQuestion" />
            </Link>
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
