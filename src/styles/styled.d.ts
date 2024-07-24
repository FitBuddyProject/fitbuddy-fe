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
            bold: number;
        };
        color: {
            primary: string;
            white: string;
            black: string;
            error: string;
            blueGrey03: string;
            blueGrey05: string;
            blueGrey09: string;
            blueLight: string;
        };
    }
}
