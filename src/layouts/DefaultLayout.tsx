import Header from "../components/Header";
import AppContainer from "./DefaultLayoutStyle";
import RoutesGroup from "../RoutesGroup";

const DefaultLayout = () => {

    return (
        <AppContainer>
            <div id="wrap">
                <header><Header/></header>
                <aside></aside>
                <section>
                    <RoutesGroup/>
                </section>
                <footer></footer>
            </div>
        </AppContainer>
    )
}

export default DefaultLayout;