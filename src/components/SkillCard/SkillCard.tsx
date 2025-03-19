import { cn } from "@/utils/cn";
import styles from "./SkillCard.module.css";
import { PropsWithChildren, ReactNode } from "react";
import Markdown from "../Markdown";

export const SkillCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-20 border border-solid border-light-grey rounded-sm p-5 backdrop-blur-xl">
      {children}
    </div>
  );
};

export const SkillCardTitle = ({ text }: { text: string }) => (
  <p className="text-[30px] whitespace-pre">{text}</p>
);

export const SkillCardHeader = ({ children }: PropsWithChildren) => {
  return <div className="flex items-center justify-between ">{children}</div>;
};

export const SkillCardIcon = () => {
  return <div className={cn(styles["skill-card-icon"])} />;
};

export const SkillCardDescription = ({
  markdown,
  className,
}: {
  markdown: string;
  className?: string;
}) => {
  return (
    <div className={cn("text-light-grey", className)}>
      <Markdown>{markdown}</Markdown>
    </div>
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

export const SkillCardIconSE = () => {
  return (
    <div className={cn(styles["skill-card-icon-se"])}>
      <SkillCardIcon />
    </div>
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
