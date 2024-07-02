import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
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


function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
