import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import GlobalStyle from "./styles/globalStyles";
import RoutesGroup from "./routes/RoutesGroup";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <GlobalStyle/>
                <DefaultLayout>
                    <RoutesGroup/>
                </DefaultLayout>
            </Provider>
        </BrowserRouter>
    );
};

export default App;
