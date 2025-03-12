import { Meta, StoryObj } from "@storybook/react";
import SectionText from "./SectionText";

export default {
  title: "Components/SectionText",
  component: SectionText,
} as Meta<typeof SectionText>;

type Story = StoryObj<typeof SectionText>;

export const Default: Story = {
  args: {
    markdown: `I’ve been engineering software for **over a decade**.  
    Specializing in frontend technologies and frameworks like **React**, 
    **Typescript**, and **NextJS**.`,
  },
};
