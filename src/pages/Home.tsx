import CanvasComponent from "components/Object/Canvas";
import styled from "styled-components";

const Container = styled.div`
    height: 100%;
`;

const Home = () => {
    return (
        <Container>
            <CanvasComponent />
        </Container>
    );
};

export default Home;
