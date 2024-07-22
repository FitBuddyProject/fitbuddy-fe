import React from "react";
import { css, styled } from "styled-components";

export interface ButtonProps {
  /** 버튼 안의 내용 */
  children?: React.ReactNode;
  /** 버튼 클릭 시 호출할 함수 */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** 버튼 타입 설정 */
  type?: "submit" | "button" | undefined;
  /** 버튼 색상 설정*/
  variant?: "primary" | "dark" | "secondary";
  /** 버튼 크기 설정*/
  size?: "default" | "small" | "large";
  /** 버튼 비활성화 */
  disabled?: boolean;
  /** 커스텀 속성 */
  content?: string;
}

const ButtonStyle = styled.button<ButtonProps>`
  border-radius: 5px;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  ${({ variant }) => variant && COLORS[variant]}
`;

const COLORS = {
  primary: css`
    background-color: skyblue;
    color: #fff;
    &:hover:enabled {
      border: 1px solid var(--content-color-dark);
      color: var(--color-black);
    }
    &:disabled {
      background-color: var(--content-color-light);
    }
  `,
  secondary: css`
    background-color: green;
    &:disabled {
      background-color: yellow;
    }
  `,
  dark: css`
    background-color: var(--point-color);
    &:disabled {
      background-color: var(--content-color-light);
    }
  `,
};

const SIZES = {
  default: css`
    width: 220px;
    height: 200px;
  `,
  small: css`
    width: 220px;
    height: 200px;
  `,
  large: css`
    width: 480px;
    height: 200px;
  `,
};

export function Button({ children, onClick, type, variant, size, disabled }: ButtonProps) {
  return (
    <ButtonStyle type={type} size={size} variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
}
