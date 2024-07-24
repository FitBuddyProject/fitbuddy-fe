import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useProgress } from "@react-three/drei";

import Model from "./Model";
import LightController from "./LightController";

function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
}

const CanvasComponent = () => {
    return (
        <div style={{ width: "auto", height: "40%" }}>
            <Canvas>
                <Suspense fallback={<Loader />}>
                    <OrbitControls />
                    <LightController />
                    <Model url="models/dinosaur.obj" />
                </Suspense>
            </Canvas>
        </div>
    );
};
export default CanvasComponent;
