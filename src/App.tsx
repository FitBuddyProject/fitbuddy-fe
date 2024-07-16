import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyles";
import { theme } from "styles/theme";

import Layout from "layouts/Layout";
import RoutesGroup from "routes/RoutesGroup";

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Layout>
                    <RoutesGroup />
                </Layout>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
