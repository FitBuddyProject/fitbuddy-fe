import styled from "styled-components";

export const LoginWrapper = styled.div`
    overflow-y: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;


export const TopSect = styled.div`
    padding: 0 16px 16px 16px;
    //height: calc(100% * (63 / 844));
`;

export const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 130%;
    color: ${({ theme }) => theme.color.blueGrey90};
    margin-bottom: 8px;
`;

export const Subtitle = styled.div`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 130%;
    color: ${({ theme }) => theme.color.blueGrey50};
`;

//////////////////////////////////////////////////

export const NameSect = styled.div`
    padding: 0 16px 16px 16px;
    //height: calc(100% * (93 / 844));
    margin-bottom: 26px;
`;

export const InputBox = styled.input`
    width: 100%;
    height: 46px;
    border-radius: 8px;
    border: .5px solid lightgray;
    margin-bottom: 10px;

    // 글자
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 130%;
    padding: 10px;

`;

export const Validation = styled.div`
    margin-bottom: 10px;
    color: red;
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 150%;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

//////////////////////////////////////////////////

export const CharactersSect = styled.div`
    height: calc(100% * (270 / 844));
    border: 1px solid red;
`;


export const BottomSect = styled.div`
    padding: 16px;
    margin-top: auto;

    button {
        width: 100%;
        height: 46px;
        border-radius: 8px;

    }
`;

export const HintWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.blueGrey03};
    padding: 10px;
    margin-bottom: 16px;
    border-radius: 8px;

    p {
        color: ${({ theme }) => theme.color.blueGrey40};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        font-size: ${({ theme }) => theme.fontSize.xs};
        line-height: 130%;
        display: flex;
    }

    Button {
        border-radius: 8px;

    }

`;


