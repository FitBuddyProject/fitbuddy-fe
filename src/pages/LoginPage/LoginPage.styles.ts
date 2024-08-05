import styled from "styled-components";

export const LoginWrapper = styled.div`
    flex: 1;
    overflow-y: auto;
    height: 100%;
    padding: 16px;
`;


export const TopSect = styled.div`
    
`;

export const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 130%;
    color: ${({ theme }) => theme.color.blueGrey90};
    margin: 0 5px 6px 5px;
`;

export const Subtitle = styled.div`
    margin-bottom: 16px;

    p {
        font-size: ${({ theme }) => theme.fontSize.sm};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        color: ${({ theme }) => theme.color.blueGrey50};
        line-height: 130%;
    }
`;

export const BottomSect = styled.div`

    input {
        margin-top: 16px;
        width: 100%;
        border: 0.5px solid lightgray;
        height: 46px;
        border-radius: 8px;
        margin-bottom: 10px;

        // 글자
        font-size: 16px;
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        line-height: 130%;
        padding: 10px;
    }

    .validation {
        margin-bottom: 10px;
        color: red;
        font-size: ${({ theme }) => theme.fontSize.sm};
        line-height: 150%;
        font-weight: ${({ theme }) => theme.fontWeight.medium};


    }

    button {
        width: 100%;
        height: 46px;
        margin-bottom: 10px;
        border-radius: 8px;
        font-weight: ${({ theme }) => theme.fontWeight.bold};

    }

    .hint {
        margin-bottom: 10px;
        line-height: 150%;
        color: ${({ theme }) => theme.color.blueGrey50};
        font-size: ${({ theme }) => theme.fontSize.sm};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        
        .emphasis {
            text-decoration: underline;
            color: ${({ theme }) => theme.color.primary};

        }
    }
`;


export const ButtonWrap = styled.button`
`;
