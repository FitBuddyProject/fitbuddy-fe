import styled from "styled-components";

export const LoginWrapper = styled.div`
    overflow-y: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
`;


export const TopSect = styled.div`
    flex: 1;
    
`;

export const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    line-height: 130%;
    color: ${({ theme }) => theme.color.blueGrey90};

    padding: 0 16px 16px 16px;


`;


export const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px;
    height: 50px;
`;

export const InputBox = styled.input`
    width: 40px;
    height: 40px;
    margin: 0 10px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color:${({ theme }) => theme.color.blueGrey03};
    outline: none;
`;

export const HintWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 16px;
`;

export const HintText = styled.div`
    text-decoration: underline;
    color: ${({theme}) => theme.color.grey80};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 150%;
`;


export const TimeLeft = styled.div`
    color: ${({theme}) => theme.color.primary};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 150%;
`;


export const BottomSect = styled.div`
    margin: 16px;
    flex: 0;
    
    button {
        width: 100%;
        height: 46px;
        margin-bottom: 10px;
        border-radius: 8px;
    }
`;


export const PolicyWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px;
    div {
        text-decoration: underline;
        color: ${({theme}) => theme.color.grey80};
        font-size: ${({ theme }) => theme.fontSize.sm};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        line-height: 150%;
    }
    
    p {
        padding: 0 8px;
    }
`;



export const ButtonWrap = styled.button`
`;
