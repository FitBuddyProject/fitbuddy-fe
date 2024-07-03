import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Object3D = () => {
  const object = useLoader(OBJLoader, "models/donut.obj");

  return <primitive object={object} />;
};

const Home = () => {
  return (
    <main style={{ height: "100vh" }}>
      <div>Home</div>
      <h1>Donut Sample</h1>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Object3D />
      </Canvas>
    </main>
  );
};

export default Home;
