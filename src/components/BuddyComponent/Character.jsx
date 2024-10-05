import { useEffect, useLayoutEffect, useRef } from "react";

import * as THREE from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import { theme } from "styles/theme";

// 색상 파일
import { colorMapping } from "./colors";

const Character = ({ url, color = "black", ...props }) => {
  // OBJ model 불러오기
  const obj = useLoader(OBJLoader, `models/${url}.obj`);
  const ref = useRef();

  useLayoutEffect(() => {
    console.log("obj :: {}", obj);
    obj.traverse((child) => {
      if (child.isMesh) {
        // 부위별 이름에 따라 색상 설정
        let newMaterial = child.material.clone(); // 기존 재질 복사

        // URL에 따라 색상 설정
        const colors = colorMapping[url];
        if (colors) {
          const meshIndex = parseInt(child.name.replace("meshes[", "").replace("]", ""), 10);
          if (!isNaN(meshIndex) && colors[meshIndex] !== undefined) {
            newMaterial.color.set(colors[meshIndex]);
          }
        }
        // 필요한 만큼 추가
        child.material = newMaterial; // 새로운 재질 적용
      }
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

  // y축으로 회전하도록 설정
  useFrame(() => {
    if (ref.current) {
      //   ref.current.rotation.y += 0.01;
    }
  });
  return (
    <group ref={ref}>
      <primitive object={obj} />
    </group>
  );
};

export default Character;
