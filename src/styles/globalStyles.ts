import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  /* root element 62.5% (which is 10px) => 1rem = 10px */
  font-size: 62.5%;
}

html, 
body, 
#root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

body {
  /* initial value for the font-size to be 16px or 1.6rem */
  font-size: 1.6rem;
}

a {
  color: inherit;
  text-decoration: none;
}

li {
  list-style: none;
}

button {
  border: none;
  background-color: transparent;
}

`;

export default GlobalStyle;
