import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import styled, { css } from "styled-components";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as IconQuestion } from "assets/icons/icon-question.svg";
import { ReactComponent as IconSetting } from "assets/icons/icon-setting.svg";
import { ReactComponent as IconBack } from "assets/icons/icon-back.svg";

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
            svg {
                fill: ${({ theme }) => theme.color.blueGrey09};
            }
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
                    <Logo width={90} height={20} onClick={() => navigate("/", { replace: true })} />
                    <ButtonWrap>
                        <IconQuestion />
                        <Link to="my-page">
                            <IconSetting />
                        </Link>
                    </ButtonWrap>
                </>
            ) : (
                <>
                    <IconBack onClick={() => navigate(-1)} />
                    <h1>{title}</h1>
                </>
            )}
        </HeaderContainer>
    );
};

export default Header;
