import "./App.css";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from './styles/GlobalStyle'
import Home from "./pages/Home";
import Header from './components/Header'



function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
