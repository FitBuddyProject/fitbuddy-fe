import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.blueGrey03};

  .left {
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;
    flex-direction: column;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  .text {
    display: flex;
    flex-direction: column;
  }

  .action {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  .date {
    color: ${({ theme }) => theme.color.blueGrey40};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  .mp {
    color: ${({ theme }) => theme.color.blue};
  }

  .hp {
    color: ${({ theme }) => theme.color.error};
  }
`;

const IconBox = styled.div`
  background: ${({ theme }) => theme.color.blueGrey03};
  border-radius: 0.4rem;
  padding: 0.5rem;
  margin-right: 1rem;
  display: flex;
`;

export { ListItem, IconBox };
