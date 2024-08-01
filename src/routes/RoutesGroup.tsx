import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/HomePage";
import Intro from "pages/Intro";
import LoginPage from "pages/LoginPage/LoginPage";
import InfoPage from "pages/Home/InfoPage";
import MyPage from "pages/MyPage/MyPage";
import HistoryPage from "pages/MyPage/HistoryPage";

const RoutesGroup = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/my-page" element={<MyPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
};

export default RoutesGroup;
