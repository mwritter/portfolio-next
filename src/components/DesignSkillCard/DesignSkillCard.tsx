import {
  SkillCard,
  SkillCardDescription,
  SkillCardHeader,
  SkillCardIconDesign,
  SkillCardTitle,
} from "../SkillCard/SkillCard";

const markdown = `
Create design systems to insure design consistence and improve developer experience 
with technologies like Figma and Storybook.
`;

export const DesignSkillCard = () => {
  return (
    <SkillCard>
      <SkillCardHeader>
        <SkillCardTitle text={`Design\n `} />
        <SkillCardIconDesign />
      </SkillCardHeader>
      <SkillCardDescription markdown={markdown} />
    </SkillCard>
  );
};
