import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "center",
  },
  tags: ["autudocs"],
};

export default meta;

// type Story = StoryObj<typeof meta>;

export const Primary = () => {
  return <Button variant="primary" children="Primary Button"></Button>;
};
