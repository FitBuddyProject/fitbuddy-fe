import { Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import MyPage from "pages/MyPage";

const RoutesGroup = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/my-page" element={<MyPage />}></Route>
    </Routes>
  );
};

export default RoutesGroup;
