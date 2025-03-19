import { Meta, StoryObj } from "@storybook/react";
import { Resume } from "./Resume";

export default {
  title: "Components/Resume",
  component: Resume,
} as Meta<typeof Resume>;

type Story = StoryObj<typeof Resume>;

export const Default: Story = {};
