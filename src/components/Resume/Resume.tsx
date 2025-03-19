import Markdown from "../Markdown";
import { data } from "../Timeline/Timeline";

type ResumePositionProps = {
  title: string;
  company: string;
  dates: string[];
  description: string;
};

export const Resume = () => {
  return (
    <div className="max-w-[900px] mx-auto p-5 flex flex-col gap-10 print:text-black!">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">Matthew Ritter</h1>
        <p>matthewwilliamritter@gmail.com</p>
      </div>
      <p>
        I’ve been engineering software for over a decade. Specializing in
        frontend technologies and frameworks like React, Typescript, and NextJS.
        I enjoy working on challenging problems and leveraging software to solve
        those problems.
      </p>
      <div className="flex flex-col gap-5">
        <ResumePosition {...nearForm} />
        <ResumePosition {...formidable} />
        <ResumePosition {...azaleaHealth} />
      </div>
      <div className="space-y-2.5">
        <h2 className="text-2xl">Education</h2>
        <p>
          Valdosta State University, Valdosta, Ga – BS in Computer Information
          Systems
        </p>
      </div>
      <div className="space-y-2.5">
        <h2 className="text-2xl">Specialties</h2>
        <p>
          Next, React, Redux, Vue, Backbone, Node, Express, JavaScript, HTML,
          CSS, SCSS, Bootstrap, Tailwind, PHP, Java, Flutter, Python, Rust,
          Sanity, GraphQL
        </p>
      </div>
    </div>
  );
};

const ResumePosition = ({
  title,
  company,
  dates,
  description,
}: ResumePositionProps) => {
  const [start, end] = dates;

  return (
    <div className="border border-solid border-white p-4 rounded-xs print:break-inside-avoid print:border-black">
      <p className="text-xl">{title}</p>
      <p className="text-sm text-light-grey">{company}</p>
      <p className="text-sm text-light-grey mb-5">
        {start}
        {end ? ` - ${end}` : null}
      </p>

      <Markdown>{description}</Markdown>
    </div>
  );
};

const [a, f, n] = data;

const nearForm: ResumePositionProps = {
  ...n,
  description: `
Break down large bodies of work into smaller pieces for the team to work on.
\\
\\
Take the lead on specific features, from investigation to implementation.`,
};
const formidable: ResumePositionProps = {
  ...f,
  description: `
Integrate with new teams and technologies quickly to deliver on client projects and improve on team processes where possible.
\\
\\
Mentor others to accelerate their career-growth and encourage their participation.
\\
\\
Communicate directly with clients and stakeholders.
\\
\\
Utilize knowledge of advanced web patterns, scaling, state management and performance to design and implement effective and efficient solutions.
\\
\\
Work with testing frameworks like jest, react-testing-library and puppeteer to insure code integrity.`,
};

const azaleaHealth: ResumePositionProps = {
  ...a,
  description: `
Work closely with team members in a fast paced agile environment using continuous integration and delivery practices.
\\
\\
Improve application stability and performance through features and bug fixes.
\\
\\
Participate in pair programming, mentoring, peer review and on boarding for new engineers.
\\
\\
Implement full stack solutions to achieve client goals related to workflow improvements, patient privacy, client reporting, HIPAA auditing, and encounter charting.`,
};
