import styled from "styled-components";

const Container = styled.div<{ color: any }>`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 14px;
  display: flex;
  gap: 10px;

  progress[value] {
    width: 150px;
    appearance: none;
    flex: 1;

    &::-webkit-progress-bar {
      height: 9px;
      border-radius: 50px;
      background-color: ${({ theme }) => theme.color.blueGrey03};
      border: 1px solid ${({ theme }) => theme.color.blueGrey05};
    }

    &::-webkit-progress-value {
      height: 9px;
      border-radius: 50px;
      background-color: ${({ color }) => color};
    }
  }
`;

interface ProgressBarProps {
  label: string;
  value: number;
  color?: string;
}

const ProgressBar = ({ label, value, color }: ProgressBarProps) => {
  return (
    <Container color={color}>
      <span>{label}</span>
      <progress value={value} max={100} />
      <span>{value}%</span>
    </Container>
  );
};
export default ProgressBar;
