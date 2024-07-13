import { BrowserRouter, Router, useLocation } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { useState } from "react";
import GlobalStyle from "./styles/globalStyles";
import RoutesGroup from "./routes/RoutesGroup";

const App = () => {
  // const location = useLocation();
  // const [isDefault, setIsDefault] = useState(true);

  // return <>{isDefault ? <DefaultLayout /> : <BlankLayout />}</>;
  return (
    <BrowserRouter>
      <GlobalStyle />
      <DefaultLayout>
        <RoutesGroup />
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default App;
