import Heading from "./Heading/Heading";
import SectionText from "./SectionText/SectionText";

const markdown = `
I’ve contributed to a range of projects and these are the main skills 
I bring to the table.
`;

export const ExperienceSection = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col gap-2">
        <Heading text={`My Experience`} />
        <SectionText markdown={markdown} />
      </div>
    </div>
  );
};
