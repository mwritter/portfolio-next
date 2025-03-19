import Heading from "./Heading/Heading";
import SectionText from "./SectionText/SectionText";

const markdown = `
I have **bachelors degree in Computer Information Systems**, 
and **over a decade** of experience working with web technologies.
\\
\\
In my current roll as a Senior Software Engineer I have had the 
privilege of working on many interesting projects, that involve 
**building APIs** with **NodeJS**, interfacing with **cloud** platforms, 
**site modernization**, **e-commerce** platform, **scaffolding greenfield 
projects**, building **component libraries** and working with **startups**.
`;

export const IntroSection = () => {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex flex-col gap-2">
        <Heading text={`Hey I'm\nMatthew Ritter`} />
        <SectionText markdown={markdown} />
      </div>
    </div>
  );
};
