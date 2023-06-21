import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Specialities from "@/components/Specialities";
import { getIntro, getResume } from "@/sanity/sanity-utils";

export default async function Home() {
  const introHero = await getIntro();
  const resume = await getResume();

  return (
    <>
      <Hero introHero={introHero} />
      <Clients clients={resume.clients} />
      <Specialities />
    </>
  );
}
