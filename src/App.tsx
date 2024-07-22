import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyles";
import { theme } from "styles/theme";

import Layout from "layouts/Layout";
import RoutesGroup from "routes/RoutesGroup";

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <GlobalStyle />
                    <Layout>
                        <RoutesGroup />
                    </Layout>
                </Provider>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
