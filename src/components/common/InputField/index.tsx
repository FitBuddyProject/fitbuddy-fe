import styled from "styled-components";

interface InputProps {
  value?: string | number;
  type?: "text" | "number";
  placeholder?: string;
  onChange?: () => void;
  label?: string;
  maxLength?: number;
  validationText?: string;
}

const InputField = ({ value, type = "text", placeholder, label, validationText, ...props }: InputProps) => {
  return (
    <>
      <InputWrap>
        <input type={type} placeholder={placeholder} value={value} {...props} />
        {label && <span>{label}</span>}
      </InputWrap>
      {validationText && <Validation>{validationText}</Validation>}
    </>
  );
};

export default InputField;

const InputWrap = styled.div`
  width: 100%;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.blueGrey03};
  padding: 1.1rem 1rem;
  display: flex;
  align-items: center;
  input {
    border: none;
    width: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme.color.blueGrey30};
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const Validation = styled.span`
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;
