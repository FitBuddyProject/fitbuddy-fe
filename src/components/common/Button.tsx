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
    variant?: "primary" | "secondary" | "dark" | "danger";
    /** 버튼 크기 설정*/
    size?: "default" | "small" | "large";
    /** 버튼 비활성화 */
    disabled?: boolean;
    /** 커스텀 속성 */
}

const ButtonStyle = styled.button<ButtonProps>`
    border-radius: 8px;
    text-align: center;
    padding: 10px;
    color: #fff;
    cursor: pointer;
    ${({ size }) => size && SIZES[size]}
    ${({ variant }) => variant && VARIANTS[variant]}
`;

const VARIANTS = {
    primary: css`
        background-color: #9544ff;
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
    default: css`
        width: 328px;
        height: 56px;
    `,
    small: css`
        width: 220px;
        height: 200px;
    `,
    large: css`
        width: 328px;
        height: 56px;
    `,
};

export function Button({ children, onClick, type, variant, size, disabled }: ButtonProps) {
    return (
        <ButtonStyle type={type} size={size} variant={variant} onClick={onClick} disabled={disabled}>
            {children}
        </ButtonStyle>
    );
}
