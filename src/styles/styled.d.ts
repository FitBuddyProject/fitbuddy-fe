import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        fontSize: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            title: string;
        };
        fontWeight: {
            semiBold: number;
            bold: number;
        };
        color: {
            primary: string;
            primaryLight: string;
            white: string;
            black: string;
            error: string;
            blueGrey05: string;
            blueGrey03: string;
            blueGrey40: string;
            blueGrey50: string;
            blueGrey08: string;
            blueGrey90: string;
            blueLight: string;
        };
    }
}
