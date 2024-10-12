import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <SnackbarProvider maxSnack={3}>
        <App/>
    </SnackbarProvider>
);

// pwa 등록
serviceWorkerRegistration.register();
