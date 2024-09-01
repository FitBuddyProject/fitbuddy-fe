import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "store/slices/modal";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useProgress } from "@react-three/drei";

import Character from "./Character";
import LightController from "./controls/LightController";
import CustomOrbitControls from "./controls/CustomOrbitControls";

import styled from "styled-components";
import { theme } from "styles/theme";

function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
}

const BuddyComponent = () => {
    const dispatch = useDispatch();

    const handlePet = () => {
        dispatch(
            modalActions.pushNotificationModal({
                // content: `쓰다듬어줘서 고마워요.\n내일 다시 쓰다듬어 주세요.🥰`,
                content: `쓰다듬어줘서 고마워요.\n내일 다시 쓰다듬어 주세요.🥰`,
                subContent: `피로도 -2 경험치 +6`,
            })
        );
    };

    return (
        <Container onClick={handlePet}>
            <Canvas camera={{ position: [0, 0, 3], fov: 70 }}>
                <Suspense fallback={<Loader />}>
                    <LightController />
                    <CustomOrbitControls />
                    {/* 캐릭터 */}
                    <Character url="models/dinosaur.obj" />
                </Suspense>
            </Canvas>
            <LabelBox>
                <span className="level">LV 2</span>
                <span className="name">올망이</span>
            </LabelBox>
        </Container>
    );
};
export default BuddyComponent;

const Container = styled.div`
    width: 100%;
    height: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    gap: 1rem;
    position: relative;
`;

const LabelBox = styled.div`
    width: 100%;
    position: absolute;
    bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    .level {
        font-weight: 800;
        font-size: ${({ theme }) => theme.fontSize.sm};
        color: ${({ color }) => theme.color.primary};
        background-color: #eddfff;
        border-radius: 0.4rem;
        padding: 0 0.6rem;
    }

    .name {
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        font-size: ${({ theme }) => theme.fontSize.lg};
    }
`;
