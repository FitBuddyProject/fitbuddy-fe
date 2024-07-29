import styled from "styled-components";

export const Container = styled.main``;

export const NicknameBox = styled.div`
    margin: 1rem 1.6rem;
    padding: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.color.primaryLight};
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.color.primary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    button {
        padding: 0.4rem 1.2rem;
        background-color: ${({ theme }) => theme.color.white};
        border: 1px solid ${({ theme }) => theme.color.blueGrey05};
        border-radius: 5rem;
        font-size: ${({ theme }) => theme.fontSize.xs};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
`;

export const MenuWrap = styled.ul``;

export const MenuBox = styled.li`
    padding: 1.6rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.blueGrey03};
    display: flex;
    align-items: center;
    gap: 0.4rem;

    &.push {
        display: flex;
        justify-content: space-between;
    }
`;