import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 56px;
  display: flex;
  align-items: center;
`;

const Header = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  // TODO :: 페이지별 타이틀 설정
  const [title, setTitle] = useState("Header");
  const [isMain, setIsMain] = useState(true);

  useEffect(() => {
    location.pathname === "/intro" ? setVisible(false) : setVisible(true);

    // TODO :: 페이지별 route 헤더 노출 방식 변경 필요
    location.pathname === "/" ? setIsMain(true) : setIsMain(false);
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <HeaderContainer>
      {isMain ? (
        <div>main</div>
      ) : (
        <div>
          <button>&#60;</button>
          {title}
        </div>
      )}
    </HeaderContainer>
  );
};

export default Header;
