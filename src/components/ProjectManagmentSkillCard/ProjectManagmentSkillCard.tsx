import { cn } from "@/utils/cn";
import {
  SkillCard,
  SkillCardDescription,
  SkillCardHeader,
  SkillCardIcon,
  SkillCardTitle,
} from "../SkillCard/SkillCard";
import styles from "./ProjectmanagmentSkillCard.module.css";

const markdown = `
Work with team members to structure sprints, and to scope and priorities work.
Create epics for large features, to better track progress and distribute the work load.
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

export const SkillCardIconPM = () => {
  return (
    <div className={cn(styles["skill-card-icon-pm"])}>
      <SkillCardIcon />
      <SkillCardIcon />
      <SkillCardIcon />
      <SkillCardIcon />
      <SkillCardIcon />
      <SkillCardIcon />
    </div>
  );
};
