import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            white: string;
            black: string;
            error: string;
            blueGrey05: string;
            headerBg: string;
            background: string;
        };
    }
}
