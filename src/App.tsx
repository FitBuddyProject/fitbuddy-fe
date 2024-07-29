import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyles";
import { theme } from "styles/theme";

import Layout from "layouts/Layout";
import RoutesGroup from "routes/RoutesGroup";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                    <GlobalStyle />
                    <Layout>
                        <RoutesGroup />
                    </Layout>
                    </PersistGate>
                </Provider>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
