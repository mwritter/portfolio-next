import Clients from "@/components/Clients";
import Hero from "@/components/Hero";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Clients />
    </main>
  );
}
