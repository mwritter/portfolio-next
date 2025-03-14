import { Meta, StoryObj } from "@storybook/react";
import {
  SkillCard,
  SkillCardDescription,
  SkillCardHeader,
  SkillCardIconPM,
  SkillCardTitle,
} from "./SkillCard";

export default {
  title: "Components/SkillCard",
  component: SkillCard,
} as Meta;

type Story = StoryObj<typeof SkillCard>;

export const Default: Story = {
  render: () => (
    <SkillCard>
      <SkillCardHeader>
        <SkillCardTitle text={`Project\nManagement`} />
        <SkillCardIconPM />
      </SkillCardHeader>
      <SkillCardDescription
        className="text-light-grey"
        markdown="Work with team members to structure sprints, and to scope and priorities
        work. Create epics for large features, to better track progress and
        distribute the work load."
      />
    </SkillCard>
  ),
};
