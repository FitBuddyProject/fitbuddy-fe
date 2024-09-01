import { useEffect, useLayoutEffect, useRef } from "react";

import * as THREE from "three";
import { RoundedBox, Text } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import { theme } from "styles/theme";

const Character = ({ url, color = "black", ...props }) => {
    // OBJ model 불러오기
    const obj = useLoader(OBJLoader, url);
    const ref = useRef();

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

    // y축으로 회전하도록 설정
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01;
        }
    });
    return (
        <group ref={ref}>
            <primitive object={obj} />
        </group>
    );
};

export default Character;
