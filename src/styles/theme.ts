import { DefaultTheme } from "styled-components";

const calRem = (size: number) => `${size / 16}rem`;

const fontSize = {
  xs: calRem(12), // 0.75rem
  sm: calRem(14), // 0.875rem
  md: calRem(16), // 1rem
  lg: calRem(18), // 1.125rem
  xl: calRem(20), // 1.25rem
  // custom font
  title: calRem(36), // 2.25rem
};

const fontWeight = {
  bold: 700,
};

const color = {
  primary: "#9544FF",
  white: "#FFFFFF",
  black: "#000000",
  error: "#FF2020",
  blueGrey05: "#ECEFF1",
};

const theme: DefaultTheme = { fontSize, fontWeight, color };

export { theme };
