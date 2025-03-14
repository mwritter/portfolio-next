import {
  SkillCard,
  SkillCardDescription,
  SkillCardHeader,
  SkillCardIconDesign,
  SkillCardTitle,
} from "../SkillCard/SkillCard";

const markdown = `
Create design systems to insure design constancy and improve developer experience 
with technologies like Figma and Storybook.
`;

export const DesignSkillCard = () => {
  return (
    <SkillCard>
      <SkillCardHeader>
        <SkillCardTitle text="Design" />
        <SkillCardIconDesign />
      </SkillCardHeader>
      <SkillCardDescription markdown={markdown} />
    </SkillCard>
  );
};
