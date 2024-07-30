import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 38px;
  height: 20px;
  background: ${({ theme }) => theme.color.blueGrey05};
  border-radius: 50px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    top: 50%;
    left: 2px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: ${({ theme }) => theme.color.primary};

    &:before {
      transform: translate(18px, -50%);
    }
  }
`;

interface ToggleProps {
  isActive: boolean;
  handleChange: () => void;
}

const Toggle = ({ isActive, handleChange }: ToggleProps) => {
  return (
    <Label>
      <Input type="checkbox" value="isActive" onChange={handleChange} />
      <Switch />
    </Label>
  );
};

export default Toggle;
