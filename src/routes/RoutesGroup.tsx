import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/HomePage";
import Intro from "pages/Intro";
import LoginPage from "pages/LoginPage/LoginPage";
import InfoPage from "pages/InfoPage";
import LoginPage2 from "../pages/LoginPage/LoginPage2";
import LoginPage3 from "../pages/LoginPage/LoginPage3";
import InfoPage from "pages/Home/InfoPage";
import MyPage from "pages/MyPage/MyPage";
import HistoryPage from "pages/MyPage/HistoryPage";

const RoutesGroup = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/intro" element={<Intro />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/login2" element={<LoginPage2 />}></Route>
      <Route path="/login3" element={<LoginPage3/>}></Route>
      <Route path="/my-page" element={<MyPage />}></Route>
      <Route path="/info" element={<InfoPage />}></Route>
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
