import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import styled from "styled-components";

export default {
    title: "Components/Button",
    components: Button,
    parameters: {
        layout: "center",
    },
    tags: ["autodocs"],
} as Meta;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Large = () => {
    return (
        <Wrapper>
            <Button type="button" size="large" variant="primary">
                Primary Button
            </Button>
            <Button type="button" size="large" variant="secondary">
                Secondary Button
            </Button>
            <Button type="button" size="large" variant="dark">
                Dark Button
            </Button>
            <Button type="button" size="large" variant="danger">
                Danger Button
            </Button>
        </Wrapper>
    );
};
