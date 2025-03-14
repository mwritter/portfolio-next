import { cn } from "@/utils/cn";
import {
  SkillCard,
  SkillCardDescription,
  SkillCardHeader,
  SkillCardIcon,
  SkillCardTitle,
} from "../SkillCard/SkillCard";
import styles from "./SoftwareEngineerSkillCard.module.css";

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

export const SkillCardIconSE = () => {
  return (
    <div className={cn(styles["skill-card-icon-se"])}>
      <SkillCardIcon />
    </div>
  );
};
