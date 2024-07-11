import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

const RoutesGroup = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
        </Routes>
    )
}

export default RoutesGroup;