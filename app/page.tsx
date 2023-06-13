import Hero from "@/components/Hero";
import { getIntro } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
