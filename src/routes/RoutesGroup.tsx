import { Route, Routes } from "react-router-dom";

import MyPage from "pages/MyPage/MyPage";
import Home from "../pages/Home";
import Intro from "pages/Intro";
import LoginPage from "pages/LoginPage/LoginPage";
import InfoPage from "pages/InfoPage";

const RoutesGroup = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/intro" element={<Intro />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/my-page" element={<MyPage />}></Route>
      <Route path="/info" element={<InfoPage />}></Route>
    </Routes>
  );
};

export default RoutesGroup;
