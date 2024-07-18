import { Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import MyPage from "pages/MyPage";
import MainPage from "../pages/MainPage";

const RoutesGroup = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/my-page" element={<MyPage />}></Route>
    </Routes>
  );
};

export default RoutesGroup;
