import { Route, Routes } from "react-router-dom";

import AuthRoute from "./AuthRoute";

import Home from "pages/Home/HomePage";
import Intro from "pages/Intro";
import LoginPage from "pages/LoginPage/LoginPage";
import MyPage from "pages/MyPage/MyPage";
import HistoryPage from "pages/MyPage/HistoryPage";
import InfoPage from "pages/Home/InfoPage";
import SelectBuddy from "pages/SelectBuddy/SelectBuddy";
import Fitdex from "pages/Fitdex";
import MyInfo from "pages/MyInfo";
import MyInfoModify from "pages/MyInfo";

const RoutesGroup = () => {
  const isAuthenticated = () => {
    const userData = localStorage.getItem("userData");
    console.log("userData:: {}", userData);
    return !!userData;
  };
  return (
    <Routes>
      <Route path="/intro" element={<Intro />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/select-buddy" element={<SelectBuddy />} />

      <Route path="/" element={<AuthRoute element={<Home />} isAuthenticated={isAuthenticated()} />} />
      <Route path="/my-page" element={<AuthRoute element={<MyPage />} isAuthenticated={isAuthenticated()} />} />
      <Route path="/info" element={<AuthRoute element={<InfoPage />} isAuthenticated={isAuthenticated()} />} />
      <Route path="/my-info" element={<AuthRoute element={<MyInfo />} isAuthenticated={isAuthenticated()} />} />
      <Route path="/history" element={<AuthRoute element={<HistoryPage />} isAuthenticated={isAuthenticated()} />} />
      <Route path="/my-fitdex" element={<AuthRoute element={<Fitdex />} isAuthenticated={isAuthenticated()} />} />
      <Route
        path="/my-info-modify"
        element={<AuthRoute element={<MyInfoModify />} isAuthenticated={isAuthenticated()} />}
      />
    </Routes>
  );
};

export default RoutesGroup;
