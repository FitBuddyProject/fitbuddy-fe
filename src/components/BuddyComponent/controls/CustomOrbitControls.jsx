import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

const CustomOrbitControls = () => {
  const controlsRef = useRef();

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      enableRotate={false} // 회전 비활성화
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      minDistance={10}
    />
  );
};

export default CustomOrbitControls;
