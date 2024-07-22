import styled from "styled-components";

const HeaderContainer = styled.header`
    height: 60px;
    background-color: ${({ theme }) => theme.colors.headerBg};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = () => {
    return <HeaderContainer>Header</HeaderContainer>;
};

export default Header;
