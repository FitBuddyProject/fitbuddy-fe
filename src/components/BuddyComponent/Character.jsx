import { useEffect, useLayoutEffect, useRef } from "react";

import * as THREE from "three";
import { RoundedBox, Text } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import { theme } from "styles/theme";

const Character = ({ url, name, level, color = "black", ...props }) => {
  // OBJ model 불러오기
  const obj = useLoader(OBJLoader, url);
  const ref = useRef();
  const textRef = useRef();

  const { camera } = useThree();

  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child.isMesh) {
        child.material[0].color.set("#D9C791");
        child.material[1].color.set("#BF3434");
        child.material[2].color.set("#27331F");
        child.material[3].color.set("#E39EA3");
      } else if (child.isLine) child.material.color.set("white");
    });
  }, [obj, color]);

  useEffect(() => {
    if (ref.current) {
      // 캐릭터가 중앙에 오도록 위치 조정
      const box = new THREE.Box3().setFromObject(ref.current);
      const center = new THREE.Vector3();
      box.getCenter(center);
      ref.current.position.sub(center);
    }
  }, [obj]);

  useFrame(() => {
    if (textRef.current) {
      // 텍스트가 카메라를 향하게 고정
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <group ref={ref}>
      <primitive object={obj} />
      <group ref={textRef} position={[-0.15, -0.5, 0]}>
        <RoundedBox args={[0.6, 0.3, 0.02]} radius={0.1} smoothness={4} position={[-0.3, 0, 0]}>
          <meshBasicMaterial attach="material" color="#eddfff" />
        </RoundedBox>
        <Text position={[-0.3, 0, 0.01]} fontSize={0.2} color={theme.color.primary} anchorX="center" anchorY="middle">
          LV {level}
        </Text>
        <Text position={[0.2, 0, 0]} fontSize={0.3} color={theme.color.blueGrey90} anchorX="left" anchorY="middle">
          {name}
        </Text>
      </group>
    </group>
  );
};

export default Character;
