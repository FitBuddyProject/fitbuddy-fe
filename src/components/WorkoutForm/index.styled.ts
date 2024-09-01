import styled from "styled-components";

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  left: 0;

  visibility: hidden;
  opacity: 0;
  transition: 0.25s;
  z-index: 2;

  &.on {
    visibility: visible;
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  position: fixed;
  left: 0;
  bottom: 0;
  border-radius: 1rem 1rem 0 0;
  padding: 1.6rem;
  transition: 0.25s;
  visibility: hidden;
  z-index: 10;
  transition: 0.25s;

  &.on {
    visibility: visible;
    opacity: 1;
  }

  &.off {
    transform: translateY(100%);
  }
`;

const FormContainer = styled.form`
  overflow-y: auto;
  margin-bottom: 5.6rem;
`;

const TopArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const WorkoutCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-bottom: 1rem;
`;

const WorkoutRadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  input[type="radio"] {
    display: none;
  }
`;

const WorkoutLabel = styled.label<{ selected: boolean }>`
  background-color: ${({ theme }) => theme.color.blueGrey03};
  padding: 0.6rem 1rem;
  border-radius: 5rem;
  width: fit-content;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  background-color: ${({ selected, theme }) => (selected ? theme.color.primaryLight : theme.color.blueGrey03)};
  border: ${({ selected, theme }) => (selected ? `1px solid ${theme.color.primary}` : "none")};

  span {
    color: ${({ selected, theme }) => (selected ? theme.color.primary : "black")};
  }
`;

const AddWorkoutButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid purple;
  color: purple;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const Note = styled.textarea`
  border-radius: 0.8rem;
  padding: 1rem;
  width: 100%;
  min-height: 12rem;
  height: 12rem;
  background-color: ${({ theme }) => theme.color.blueGrey03};
  border: none;
`;

const Wrap = styled.div`
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
`;

const TimeInput = styled.div`
  background-color: ${({ theme }) => theme.color.blueGrey03};
  border-radius: 0.8rem;
`;

const RadioWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const RadioBox = styled.div`
  input {
    display: none;
  }
  label {
    display: block;
    border-radius: 50%;
    padding: 1rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
    background-color: ${({ theme }) => theme.color.blueGrey03};
    line-height: 100%;
  }
  input[type=radio]: checked + label {
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.primaryLight};
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`;

export {
  Overlay,
  Container,
  FormContainer,
  TopArea,
  WorkoutCategory,
  Label,
  WorkoutRadioGroup,
  WorkoutLabel,
  AddWorkoutButton,
  Note,
  Wrap,
  TimeInput,
  RadioWrap,
  RadioBox,
};
