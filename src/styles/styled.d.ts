import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            white: string;
            black: string;
            headerBg: string;
            background: string;
            primary: string;
        };
    }
}
