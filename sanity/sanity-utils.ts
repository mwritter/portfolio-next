import { Intro } from "@/types/Intro";
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
