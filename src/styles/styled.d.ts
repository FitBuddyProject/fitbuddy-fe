import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
      fontSize: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        title: string;
      };
      fontWeight: {
        medium: number;
        semiBold: number;
        bold: number;
      };
      color: {
        primary: string;
        primaryLight: string;
        white: string;
        black: string;
        blue: string;
        error: string;
        grey80: string;
        blueGrey05: string;
        blueGrey03: string;
        blueGrey30: string;
        blueGrey40: string;
        blueGrey50: string;
        blueGrey70: string;
        blueGrey80: string;
        blueGrey90: string;
        blueLight: string;
      };
    }
}
