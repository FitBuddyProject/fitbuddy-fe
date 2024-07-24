import styled from "styled-components";

const Container = styled.div<{ color: any }>`
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.sm};
    display: flex;
    gap: 1rem;

    progress[value] {
        appearance: none;
        flex: 1;

        &::-webkit-progress-bar {
            height: 0.9rem;
            border-radius: 5rem;
            background-color: ${({ theme }) => theme.color.blueGrey03};
            border: 1px solid ${({ theme }) => theme.color.blueGrey05};
        }

        &::-webkit-progress-value {
            height: 0.9rem;
            border-radius: 5rem;
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
