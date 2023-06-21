import { Intro } from "@/types/Intro";
import { Resume } from "@/types/Resume";
import { Speciality } from "@/types/Speciality";
import { createClient, groq } from "next-sanity";

export async function getIntro(): Promise<Intro> {
  const client = createClient({
    projectId: "6rurbmv4",
    dataset: "production",
    apiVersion: "2023-05-13",
  });

  const [intro] = await client.fetch<Intro[]>(
    groq`*[_type=="intro"]{
        _id,
        _createdAt,
        "primaryImage": primaryImage.asset->url,
        "secondaryImage": secondaryImage.asset->url,
        header,
        text
    }`
  );

  return intro;
}
export async function getResume(): Promise<Resume> {
  const client = createClient({
    projectId: "6rurbmv4",
    dataset: "production",
    apiVersion: "2023-05-13",
  });

  const [resume] = await client.fetch<Resume[]>(
    groq`*[_type=="resume"]{
        _id,
        _createdAt,
        profile,
        workExperience,
        technoligies,
        clients,
        education
    }`
  );

  return resume;
}

export async function getSpecialities(): Promise<Speciality[]> {
  const client = createClient({
    projectId: "6rurbmv4",
    dataset: "production",
    apiVersion: "2023-05-13",
  });

  const specialities = await client.fetch<Speciality[]>(
    groq`*[_type=="specialities"]{
        _id,
        _createdAt,
        icon,
        header,
        text
    }`
  );

  return specialities;
}
