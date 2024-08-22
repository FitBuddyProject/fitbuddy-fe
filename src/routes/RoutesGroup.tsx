import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/HomePage";
import Intro from "pages/Intro";
import LoginPage from "pages/LoginPage/LoginPage";
import MyPage from "pages/MyPage/MyPage";
import HistoryPage from "pages/MyPage/HistoryPage";
import InfoPage from "pages/Home/InfoPage";
import SelectBuddy from "../pages/SelectBuddy/SelectBuddy";
import Fitdex from "../pages/Fitdex";
import MyInfo from "../pages/MyInfo";

const RoutesGroup = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/intro" element={<Intro />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/my-page" element={<MyPage />}></Route>
            <Route path="/info" element={<InfoPage />}></Route>
            <Route path="/select-buddy" element={<SelectBuddy />}></Route>
            <Route path="/history" element={<HistoryPage />}></Route>
            <Route path="/my-fitdex" element={<Fitdex />}></Route>
            <Route path="/my-info" element={<MyInfo />}></Route>
        </Routes>
    );
};

export default RoutesGroup;
