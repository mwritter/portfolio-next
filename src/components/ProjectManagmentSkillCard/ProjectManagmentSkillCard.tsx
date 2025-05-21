import {
  SkillCard,
  SkillCardDescription,
  SkillCardHeader,
  SkillCardIconPM,
  SkillCardTitle,
} from "../SkillCard/SkillCard";

const markdown = `
Work with team members to structure sprints, and to scope and prioritize work.
Create epics for large features to better track progress and distribute the work load.
`;

export const ProjectManagmentSkillCard = () => {
  return (
    <SkillCard>
      <SkillCardHeader>
        <SkillCardTitle text={`Project\nManagement`} />
        <SkillCardIconPM />
      </SkillCardHeader>
      <SkillCardDescription markdown={markdown} />
    </SkillCard>
  );
};
