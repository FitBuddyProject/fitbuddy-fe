import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useProgress } from "@react-three/drei";

import Character from "./Character";
import LightController from "./LightController";
import styled from "styled-components";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const BuddyComponent = () => {
  return (
    <Container>
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <Suspense fallback={<Loader />}>
          <LightController />
          <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} minDistance={7} maxDistance={10} />
          {/* 캐릭터 */}
          <Character url="models/dinosaur.obj" name="올망이" level="2" />
        </Suspense>
      </Canvas>
    </Container>
  );
};
export default BuddyComponent;

const Container = styled.div`
  width: 100%;
  height: 288px;
  overflow: hidden;
`;
