import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import {BrowserRouter} from "react-router-dom";
import {RecoilRoot} from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <RecoilRoot>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </RecoilRoot>
);

// pwa 등록
serviceWorkerRegistration.register();
