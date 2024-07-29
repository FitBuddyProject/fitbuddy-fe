import styled from "styled-components";

export const LoginWrapper = styled.div`
    flex: 1;
    overflow-y: auto;
    height: 100%;

`;


export const TopSect = styled.div`
    margin: 0 16px 16px 16px
`;

export const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
    line-height: 130%;
    color: ${({ theme }) => theme.color.blueGrey80};
    margin: 0 6px 6px 6px;
`;

export const Subtitle = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
    color: ${({ theme }) => theme.color.blueGrey50};
`;

export const BottomSect = styled.div`
    margin: 16px;

    input {
        width: 100%;

        height: 46px;
        border-radius: 8px;
        border: .5px solid lightgray;
        margin-bottom: 10px;
    }

    .validation {
        margin-bottom: 10px;
        color: red;
        font-size: 14px;
        line-height: 150%;
        font-weight: 400;
        
    }

    button {
        width: 100%;
        height: 46px;
        margin-bottom: 10px;
    }
    
    .hint {
        margin-bottom: 10px;
        color: ${({ theme }) => theme.color.blueGrey50};
        font-size: 14px;
        line-height: 150%;
        font-weight: 400;
    }
`;


export const ButtonWrap = styled.button`
`;
