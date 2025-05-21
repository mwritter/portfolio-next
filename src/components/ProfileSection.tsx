import Heading from "./Heading/Heading";
import SectionText from "./SectionText/SectionText";

const markdown = `
I've been engineering software for **over a decade**.  
Specializing in frontend technologies and frameworks like **React**, 
**Typescript**, and **NextJS**.
\\
\\
I enjoy working on **challenging problems** and leveraging software to solve those problems.
`;

export const ProfileSection = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex flex-col gap-2">
        <Heading text={`Senior\nSoftware Engineer`} />
        <SectionText markdown={markdown} />
      </div>
    </div>
  );
};
