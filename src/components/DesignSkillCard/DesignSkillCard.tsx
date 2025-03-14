import { cn } from "@/utils/cn";
import {
  SkillCard,
  SkillCardDescription,
  SkillCardHeader,
  SkillCardIcon,
  SkillCardTitle,
} from "../SkillCard/SkillCard";
import styles from "./DesignSkillCard.module.css";

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

export const SkillCardIconDesign = () => {
  return (
    <div className={cn(styles["skill-card-icon-design"])}>
      <SkillCardIcon />
      <SkillCardIcon />
      <SkillCardIcon />
    </div>
  );
};
