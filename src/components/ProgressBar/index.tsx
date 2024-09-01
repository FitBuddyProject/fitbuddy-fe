import styled from "styled-components";

interface ProgressBarProps {
  label: string;
  value: number;
  color?: string;
}

const ProgressBar = ({ label, value, color }: ProgressBarProps) => {
  return (
    <Container color={color}>
      <span className="label">{label}</span>
      <progress value={value} max={100} />
      <span>{value}%</span>
    </Container>
  );
};
export default ProgressBar;

const Container = styled.div<{ color: any }>`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  display: flex;
  align-items: center;
  gap: 1rem;

  progress[value] {
    appearance: none;
    flex: 1;
    height: 100%;

    &::-webkit-progress-bar {
      height: 1rem;
      border-radius: 5rem;
      background-color: ${({ theme }) => theme.color.blueGrey03};
      border: 1px solid ${({ theme }) => theme.color.blueGrey05};
    }

    &::-webkit-progress-value {
      height: 1rem;
      border-radius: 5rem;
      background-color: ${({ color }) => color};
    }
  }
`;
