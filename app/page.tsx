import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Specialities from "@/components/Specialities";
import { getIntro } from "@/sanity/sanity-utils";

export default async function Home() {
  const introHero = await getIntro();

  return (
    <>
      <Hero introHero={introHero} />
      <Clients />
      <Specialities />
      <Footer image={introHero.secondaryImage} />
    </>
  );
}
