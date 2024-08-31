import styled from "styled-components";


export const MyInfoModifyWrapper = styled.div`
    padding: 16px;
    height: 100%;
`;


export const MyInfoModifyContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    Button {
        width: 100%;
        border-radius: 8px;
    }
`;

export const NicknameSect = styled.div`
`;


export const CellphoneSect = styled.div`


`;

export const EmailSect = styled.div`
    flex: 1;

`;


export const FooterSect = styled.div`
    flex: 0;

    Button {
        width: 100%;
        border-radius: 8px;
    }
`;


export const InputBox = styled.input`
    margin: 10px 0;
    width: 100%;
    border: 0.5px solid lightgray;
    height: 46px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.blueGrey05};

    // 글자
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 130%;
    padding: 10px;
`;

export const TitleBox = styled.p`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.color.blueGrey90};
    line-height: 150%;

`;