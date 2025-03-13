import Heading from "./Heading/Heading";
import SectionText from "./SectionText/SectionText";
import { Timeline } from "./Timeline/Timeline";

const markdown = `
I’ve contributed to a range of projects and these are the main skills 
I bring to the table.
`;

export const ExperienceSection = () => {
  return (
    <div className="flex flex-col justify-center gap-20">
      <div className="flex flex-col gap-2">
        <Heading text={`My Experience`} />
        <SectionText markdown={markdown} />
      </div>
      <Timeline />
    </div>
  );
};
