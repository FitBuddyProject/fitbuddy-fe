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

  &.on {
    visibility: visible;
    opacity: 1;

    > div {
      bottom: 0;
    }
  }
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

const NameBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  li {
    background-color: ${({ theme }) => theme.color.blueGrey03};
    padding: 0.6rem 1rem;
    border-radius: 5rem;
    width: fit-content;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  .add {
    background-color: ${({ theme }) => theme.color.primaryLight};
    border: 1px solid ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
  }
`;

const InputBox = styled.div`
  width: 100%;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.blueGrey03};
  padding: 1.1rem 1rem;
  input {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.blueGrey30};
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const Validation = styled.span`
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.fontSize.sm};
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

const Time = styled.div``;

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
  }
  input[type=radio]: checked + label {
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.primaryLight};
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`;

const Intensity = styled.div``;

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 1rem 1rem 0 0;
  padding: 1.6rem;
  margin-bottom: 5.6rem;
  bottom: -300px;
  transition: 0.25s;
`;

export {
  Overlay,
  Container,
  TopArea,
  WorkoutCategory,
  Label,
  NameBox,
  InputBox,
  Validation,
  Note,
  Wrap,
  Time,
  TimeInput,
  RadioWrap,
  RadioBox,
  Intensity,
};
