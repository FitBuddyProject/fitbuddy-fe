import { useEffect, useLayoutEffect, useRef, useState } from "react";

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

// 색상 파일
import { colorMapping } from "./colors";

const Character = ({ fileName }) => {
  // OBJ model 불러오기
  const obj = useLoader(OBJLoader, `models/${fileName}.obj`);
  const ref = useRef();
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child.isMesh) {
        let newMaterial = child.material.clone();

        // 캐릭터 url 마다 색상 설정 변경
        const colors = colorMapping[fileName];
        if (colors) {
          const meshIndex = parseInt(child.name.replace("meshes[", "").replace("]", ""), 10);
          if (!isNaN(meshIndex) && colors[meshIndex] !== undefined) {
            newMaterial.color.set(colors[meshIndex]);
          }
        }
        // 필요한 만큼 추가
        child.material = newMaterial;
      }
    });
  }, [obj, fileName]);

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current);
      const center = new THREE.Vector3();
      box.getCenter(center);
      ref.current.position.sub(center);
      ref.current.rotation.y = THREE.MathUtils.degToRad(rotation);
    }
  }, [obj, rotation]);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    if (isDragging) {
      const delta = event.movementX > 0 ? 10 : -10;
      setRotation((prev) => (prev + delta) % 60);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <group
      ref={ref}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <primitive object={obj} />
    </group>
  );
};

export default Character;
