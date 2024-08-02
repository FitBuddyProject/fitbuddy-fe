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
    font-size: 18px;
    font-weight: bold;
    line-height: 130%;
    color: ${({ theme }) => theme.color.blueGrey90};
    border: 1px solid blue;
    margin-bottom: 8px;
`;

export const Subtitle = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
    color: ${({ theme }) => theme.color.blueGrey50};
`;

//////////////////////////////////////////////////

export const NameSect = styled.div`
    padding: 0 16px 16px 16px;
    height: calc(100% * (93 / 844));
    margin-bottom: 26px;

`;

export const InputBox = styled.input`
    width: 100%;
    height: 46px;
    border-radius: 8px;
    border: .5px solid lightgray;
    margin-bottom: 10px;
`;

export const Validation = styled.div`
    margin-bottom: 10px;
    color: red;
    font-size: 14px;
    line-height: 150%;
    font-weight: 400;
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
    }
`;

export const HintWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.blueGrey03};
    padding: 10px;
    margin-bottom: 16px;
    border-radius: 8px;
    p {
        color: ${({ theme }) => theme.color.blueGrey40};
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;
        display: flex;
    }

`;


