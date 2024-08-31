import styled from "styled-components";


export const MyInfoWrapper = styled.div`
    padding: 10px 16px 16px 16px;
    height: 100%;

`;


export const MyInfoContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const MyInfoHeaderSect = styled.div`
    border: 1px solid rgba(149, 68, 255, 0.5);
    background-color: rgba(149, 68, 255, 0.1);
    border-radius: 8px;

    height: 60px;
    width: 100%;
    padding: 16px;
    margin-bottom: 10px;

    display: flex;
    justify-content: space-between;

    div {

        p {
            font-size: ${({ theme }) => theme.fontSize.md};
            font-weight: ${({ theme }) => theme.fontWeight.bold};
            color: ${({ theme }) => theme.color.blueGrey90};
        }
    }


    Button {
        background-color: ${({ theme }) => theme.color.blueGrey05};
        border-radius: 16px;
        padding: 4px 12px;

        p {
            color: black;
            font-size: ${({ theme }) => theme.fontSize.xs};
            font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        }
    }
`;

export const MyInfoBodySect = styled.div`
    flex: 1;
    padding: 16px 0px;


    .input-sect {
        margin-bottom: 10px;

        p {
            font-size: ${({ theme }) => theme.fontSize.sm};
            font-weight: ${({ theme }) => theme.fontWeight.medium};
        }

        input {
            margin-top: 10px;
            width: 100%;
            border: 0.5px solid lightgray;
            height: 46px;
            border-radius: 8px;
            margin-bottom: 10px;
            background-color: ${({ theme }) => theme.color.blueGrey05};

            // 글자
            font-size: 16px;
            font-weight: ${({ theme }) => theme.fontWeight.medium};
            line-height: 130%;
            padding: 10px;
        }
    }

    .hint-sect {
        p {
            font-size: ${({ theme }) => theme.fontSize.sm};
            font-weight: ${({ theme }) => theme.fontWeight.medium};
            line-height: 150%;
        }
    }
`;

export const MyInfoFooterSect = styled.div`
    flex: 0;

    Button {
        width: 100%;
        border-radius: 8px;
    }
`;
