import Heading from "./Heading/Heading";
import SectionText from "./SectionText/SectionText";

const markdown = `
I have a **bachelors degree in Computer Information Systems** 
and **over a decade** of experience working with web technologies.
\\
\\
In my current role as a Senior Software Engineer, I have the 
privilege of working on many interesting projects, that involve 
**building APIs** with **NodeJS**, interfacing with **cloud** platforms, 
**site modernization**, **e-commerce** platform, **scaffolding greenfield 
projects**, building **component libraries** and working with **startups**.
`;

export const IntroSection = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex flex-col gap-2">
        <Heading text={`Hey I'm\nMatthew Ritter`} />
        <SectionText markdown={markdown} />
      </div>
    </div>
  );
};
