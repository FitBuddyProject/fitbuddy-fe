import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/HomePage";
import Intro from "pages/Intro";
import LoginPage from "pages/LoginPage/LoginPage";
import LoginPage2 from "../pages/LoginPage/LoginPage2";
import LoginPage3 from "../pages/LoginPage/LoginPage3";
import MyPage from "pages/MyPage/MyPage";
import HistoryPage from "pages/MyPage/HistoryPage";
import InfoPage from "pages/Home/InfoPage";
import LoginPage4 from "../pages/LoginPage/LoginPage4";

const RoutesGroup = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/intro" element={<Intro />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/login2" element={<LoginPage2 />}></Route>
            <Route path="/login3" element={<LoginPage3 />}></Route>
            <Route path="/login4" element={<LoginPage4 />}></Route>
            <Route path="/my-page" element={<MyPage />}></Route>
            <Route path="/info" element={<InfoPage />}></Route>
            <Route path="/history" element={<HistoryPage />}></Route>
        </Routes>
    );
};

export default RoutesGroup;
