import {Route, Routes, useLocation} from "react-router-dom";
import GlobalStyle from './styles/GlobalStyle'
import DefaultLayout from "./layouts/DefaultLayout";
import {useState} from "react";
import BlankLayout from "./layouts/BlankLayout";
// import Home from "./pages/Home";
// import Header from './components/Header'


const App = () => {
    const location = useLocation();
    const [isDefault, setIsDefault] = useState(true);

    return (
        <>
            <GlobalStyle/>
            {isDefault
                ? <DefaultLayout/>
                : <BlankLayout/>
            }

        </>
    );
}

export default App;
