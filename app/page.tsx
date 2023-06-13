import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Specialities from "@/components/Specialities";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Specialities />
    </main>
  );
}
