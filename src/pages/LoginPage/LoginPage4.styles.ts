import styled from "styled-components";

export const PolicyWrapper = styled.div`
    padding: 16px
`;

export const PolicyText = styled.p`
    font-weight: ${({theme}) => theme.fontWeight.medium};
    font-size: ${({theme}) => theme.fontSize.sm};
    line-height: 130%;
    white-space: pre-line;
`;
