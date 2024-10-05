import { useEffect, useLayoutEffect, useRef } from "react";

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

// 색상 파일
import { colorMapping } from "./colors";

const Character = ({ url, color = "black", ...props }) => {
  // OBJ model 불러오기
  const obj = useLoader(OBJLoader, `models/${url}.obj`);
  const ref = useRef();

  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child.isMesh) {
        let newMaterial = child.material.clone();

        // 캐릭터 url 마다 색상 설정 변경
        const colors = colorMapping[url];
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
  }, [obj, color, url]);

  useEffect(() => {
    if (ref.current) {
      // 캐릭터가 중앙에 오도록 위치 조정
      const box = new THREE.Box3().setFromObject(ref.current);
      const center = new THREE.Vector3();
      box.getCenter(center);
      ref.current.position.sub(center);
    }
  }, [obj]);

  return (
    <group ref={ref}>
      <primitive object={obj} />
    </group>
  );
};

export default Character;
