import type { Meta } from "@storybook/react";

import { Button } from ".";
import styled from "styled-components";

export default {
    title: "Components/Button",
    components: Button,
    parameters: {
        layout: "center",
    },
    tags: ["autodocs"],
} as Meta;

// 버튼을 보기 쉽게 하기 위해 추가
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Large = () => {
    return (
      <Wrapper>
        <Button type="button" size="large" color="primary">
          Primary Button
        </Button>
        <Button type="button" size="large" color="secondary">
          Secondary Button
        </Button>
        <Button type="button" size="large" color="dark">
          Dark Button
        </Button>
        <Button type="button" size="large" color="danger">
          Danger Button
        </Button>
      </Wrapper>
    );
};
