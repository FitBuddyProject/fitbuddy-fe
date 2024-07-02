import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
 
const GlobalStyles = createGlobalStyle`
  ${reset},
  * {
    box-sizing: border-box;
  }
  a {
  color: inherit;
  text-decoration: none;
  }
  li {
  list-style: none;
  }

  button{
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;
 

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  })
]

export default preview;
