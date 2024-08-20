import styled from "styled-components";


export const FitdexWrapper = styled.div`
    padding: 8px;
    height: auto;

`;

export const FitdexContainer = styled.div`
    height: 100%;
   
`;

export const FitdexRow = styled.div`
    height: auto;
    margin-bottom: 20px;
    border: .5px solid ${({ theme }) => theme.color.blueGrey03};
    border-radius: 8px;
    padding: 8px;
`;

export const FitdexRowHeader = styled.div`
    height: 2rem;
    margin-bottom: 1rem;
    p{
        font-size: ${({ theme }) => theme.fontSize.lg};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        line-height: 130%;

    }

`;

export const FitdexRowBody = styled.div`
    height: 10rem;
    margin-bottom: 1rem;
    .image-container{
        display: flex;
        gap: 16px;
        justify-content: space-between;
        img{
            width: 98px;
            height: 98px;
            border-radius: 8px;
        }
    }
    
`;

export const FitdexRowHint = styled.div`
    p{
        border-radius: 8px;
        background-color: ${({ theme }) => theme.color.blueGrey03};
        padding: 4px 10px;

        font-size: ${({ theme }) => theme.fontSize.sm};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        line-height: 130%;
    }
`;