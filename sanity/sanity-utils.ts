import { Intro } from "@/types/Intro";
import { Resume } from "@/types/Resume";
import { Speciality } from "@/types/Speciality";
import { groq } from "next-sanity";
import client from "./client";
import { SchemaType } from "./schemas/schemaTypes";

export async function getIntro(): Promise<Intro> {
  const [intro] = await client.fetch<Intro[]>(
    groq`*[_type=="intro"]{
        _id,
        _createdAt,
        "primaryImage": primaryImage.asset->url,
        "secondaryImage": secondaryImage.asset->url,
        header,
        text
    }`,
    {},
    { next: { tags: [SchemaType.Intro] } }
  );

  return intro;
}
export async function getResume(): Promise<Resume> {
  const [resume] = await client.fetch<Resume[]>(
    groq`*[_type=="resume"]{
        _id,
        _createdAt,
        profile,
        workExperience,
        technoligies,
        clients,
        education
    }`,
    {},
    { next: { tags: [SchemaType.Resume] } }
  );

  return resume;
}

export async function getSpecialities(): Promise<Speciality[]> {
  const specialities = await client.fetch<Speciality[]>(
    groq`*[_type=="specialities"]{
        _id,
        _createdAt,
        icon,
        header,
        text
    }`,
    {},
    { next: { tags: [SchemaType.Specialities] } }
  );

  return specialities;
}
