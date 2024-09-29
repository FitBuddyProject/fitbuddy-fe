import React from "react";
import { css, styled } from "styled-components";

export interface ButtonProps {
  /** 버튼 안의 내용 */
  children?: React.ReactNode;
  /** 버튼 클릭 시 호출할 함수 */
  onClick?: any;
  /** 버튼 타입 설정 */
  type?: "button" | "submit" | undefined;
  /** 버튼 색상 설정*/
  color?: "primary" | "secondary" | "dark" | "danger";
  /** 버튼 크기 설정*/
  size?: "small" | "large";
  /** 버튼 비활성화 */
  disabled?: boolean;
  /** 커스텀 속성 */
  btnType?: "round" | "square";
  className?: string;
}

const ButtonStyle = styled.button<ButtonProps>`
  border: none;
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  ${({ size }) => size && SIZES[size]}
  ${({ color }) => color && COLORS[color]}
  border-radius: ${(props) => (props.btnType === "round" ? "0.8rem" : "0")};

  &.bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5.6rem;
  }
`;

const COLORS = {
  primary: css`
    background-color: #9544ff;
    &:disabled {
      background-color: #eceff1;
    }
  `,
  secondary: css`
    background-color: #eceff1;
    color: #263238;
  `,
  dark: css`
    background-color: #263238;
  `,
  danger: css`
    background-color: #ff2020;
    &:disabled {
      background-color: #eceff1;
    }
  `,
};

const SIZES = {
  large: css`
    width: 328px;
    height: 56px;
  `,
  small: css`
    width: 220px;
    height: 200px;
  `,
};

export function Button({
  children,
  onClick,
  type = "button",
  color = "primary",
  size,
  btnType = "round",
  disabled,
  className,
}: ButtonProps) {
  return (
    <ButtonStyle
      className={className}
      type={type}
      size={size}
      btnType={btnType}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonStyle>
  );
}
