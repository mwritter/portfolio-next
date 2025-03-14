import {
  SkillCard,
  SkillCardDescription,
  SkillCardHeader,
  SkillCardIconSE,
  SkillCardTitle,
} from "../SkillCard/SkillCard";

const markdown = `
Understand software engineering best practices and maintaining a coding standard 
to create a good developer experience for the whole team.
`;

export const SoftwareEngineerSkillCard = () => {
  return (
    <SkillCard>
      <SkillCardHeader>
        <SkillCardTitle text={`Software\nEngineering`} />
        <SkillCardIconSE />
      </SkillCardHeader>
      <SkillCardDescription markdown={markdown} />
    </SkillCard>
  );
};
