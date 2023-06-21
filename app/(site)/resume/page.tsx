import { getResume } from "@/sanity/sanity-utils";
import { ExperienceType } from "@/types/Resume";
import React, { ReactNode } from "react";

const ResumePage = async () => {
  const resume = await getResume();

  return (
    <div className="mx-auto grid gap-10 max-w-[1000px] p-5 sm:p-10 md:p-20">
      {/* Name and email */}
      <div className="text-sm text-center">
        <h1 className="font-semibold text-3xl mb-2">Matthew Ritter</h1>
        <span className="font-semibold">Email</span>:
        <a href="mailto:matthewwilliamritter@gmail.com">
          matthewwilliamritter@gmail.com
        </a>
      </div>
      {/* Profile */}
      <div className="resume-part">
        <Title>Profile</Title>
        <Section>
          <p className="mb-2">Software Engineer</p>
          <p>{resume.profile}</p>
        </Section>
      </div>
      {/* Work Experience */}
      <div>
        <Title>Work Experience</Title>
        {resume.workExperience.map((work) => (
          <WorkExperience key={work.date} work={work} />
        ))}
      </div>
      {/* Specialities */}
      <div className="resume-part">
        <Title>Specialities</Title>
        <Section>{resume.technoligies.join(", ")}</Section>
      </div>
      {/* Clients */}
      <div className="resume-part">
        <Title>Most Recent Clients</Title>
        <Section>
          <ul>
            {resume.clients.map((client) => (
              <li key={client.name} className="mb-2">
                <p>{client.name}</p>
                <p
                  className="relative ml-2 px-5 py-2
                  after:absolute
                  after:left-0
                  after:top-[30%]
                  after:w-[10px]
                  after:h-[10px]
                  after:rounded-full
                  after:border"
                >
                  {client.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      </div>
      {/* Education */}
      <div className="resume-part pb-[200px]">
        <Title>Education</Title>
        <Section>
          <p>{resume.education}</p>
        </Section>
      </div>
    </div>
  );
};

export default ResumePage;

const Title = ({ children }: { children: ReactNode }) => (
  <div className="font-semibold text-xl mb-2">{children}</div>
);

const Section = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div className={`resume-section md:px-5 py-2 md:mx-5 my-2 ${className}`}>
    {children}
  </div>
);

const WorkExperience = ({ work }: { work: ExperienceType }) => {
  return (
    <Section className="sm:border-2 rounded-sm">
      <h3>{work.position}</h3>
      <p>{work.company}</p>
      <p>{work.date}</p>
      <ul>
        {work.activities?.length > 0 &&
          work.activities.map((activity) => (
            <>
              {activity.length ? (
                <li
                  className="relative ml-2 px-5 py-2
                  after:absolute
                  after:left-0
                  after:top-[30%]
                  after:w-[10px]
                  after:h-[10px]
                  after:rounded-full
                  after:border"
                >
                  {activity}
                </li>
              ) : null}
            </>
          ))}
      </ul>
    </Section>
  );
};
