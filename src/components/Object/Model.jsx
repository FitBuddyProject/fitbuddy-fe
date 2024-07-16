import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import { useLayoutEffect } from "react";
import { Mesh } from "three";

interface DinosaurColor {
    BODY: '#D9C791',
    MOUTH: '#BF3434',
    EYES: '#27331F',
    BLUSH: '#E39EA3',
}

const Model = ({ url, color = "black", ...props }) => {
    // OBJ model 불러오기
    const group = useLoader(OBJLoader, url);

    useLayoutEffect(() => {
        group.traverse((child) => {
            if (child.isMesh) {
                // child.material.color.set("#F29BDB");
                child.material[0].color.set("#D9C791");
                child.material[1].color.set("#BF3434");
                child.material[2].color.set("#27331F");
                child.material[3].color.set("#E39EA3");
            } else if (child.isLine) child.material.color.set("white");
        });
    }, [group, color]);

    return <primitive object={group} {...props} />;
};

export default Model;
