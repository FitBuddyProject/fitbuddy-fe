import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/HomePage";
import Intro from "pages/Intro";
import LoginPage from "pages/LoginPage/LoginPage";
import MyPage from "pages/MyPage/MyPage";
import HistoryPage from "pages/MyPage/HistoryPage";
import InfoPage from "pages/Home/InfoPage";

const RoutesGroup = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/intro" element={<Intro />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/my-page" element={<MyPage />}></Route>
            <Route path="/info" element={<InfoPage />}></Route>
            <Route path="/history" element={<HistoryPage />}></Route>
        </Routes>
    );
};

export default RoutesGroup;
