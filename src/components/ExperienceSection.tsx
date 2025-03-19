import { DesignSkillCard } from "./DesignSkillCard/DesignSkillCard";
import Heading from "./Heading/Heading";
import { ProjectManagmentSkillCard } from "./ProjectManagmentSkillCard/ProjectManagmentSkillCard";
import SectionText from "./SectionText/SectionText";
import { SoftwareEngineerSkillCard } from "./SoftwareEngineeringSkillCard/SoftwareEngineerSkillCard";
import { Timeline } from "./Timeline/Timeline";

const markdown = `
I’ve contributed to a range of projects and these are the main skills 
I bring to the table.
`;

export const ExperienceSection = () => {
  return (
    <div className="container flex flex-col justify-center gap-30 mx-auto">
      <div className="flex flex-col gap-2">
        <Heading text={`My Experience`} />
        <SectionText markdown={markdown} />
      </div>
      <Timeline />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 mx-auto">
        <ProjectManagmentSkillCard />
        <SoftwareEngineerSkillCard />
        <DesignSkillCard />
      </div>
    </div>
  );
};
