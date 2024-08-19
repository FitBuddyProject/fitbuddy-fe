import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

const CustomOrbitControls = () => {
    const controlsRef = useRef();

    return (
        <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 2} // 회전 제한
            maxPolarAngle={Math.PI / 2} // 회전 제한
            minDistance={10}
        />
    );
};

export default CustomOrbitControls;
