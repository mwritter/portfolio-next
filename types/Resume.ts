export type Resume = {
  _id: string;
  _createdAt: Date;
  profile: string;
  workExperience: ExperienceType[];
  technoligies: string[];
  clients: {
    name: string;
    description: string;
  }[];
  education: string;
};

export type ExperienceType = {
  position: string;
  date: string;
  company: string;
  activities: string[];
};
