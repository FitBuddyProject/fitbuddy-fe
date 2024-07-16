import "styled-components";
import { Theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    colors: {
      white: string;
      black: string;
      grey: string;
      lightgrey: string;
      darkGrey: string;
    };
  }
}
