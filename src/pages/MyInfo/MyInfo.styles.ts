import styled from "styled-components";


export const MyInfoWrapper = styled.div`
    padding: 0 16px 16px 16px;
    height: 100%;
    border: 1px solid red;

`;


export const MyInfoContainer = styled.div`
    height: 100%;
    border: 1px solid orange;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const MyInfoHeaderSect = styled.div`
    border: 1px solid rgba(149,68,255,0.5);
    background-color: rgba(149,68,255,0.1);
    border-radius: 8px;
    
    height: 60px;
    width: 100%;
    padding: 16px;
    margin-bottom: 10px;
`;

export const MyInfoBodySect = styled.div`
    flex: 1;
    border: 1px solid green;
    padding: 16px 0px;

`;

export const MyInfoFooterSect = styled.div`
    flex: 0;

    Button{
        width: 100%;
        border-radius: 8px;
    }
`;
