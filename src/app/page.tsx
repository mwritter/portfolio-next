import { ProfileSection } from "@/components/ProfileSection";
import { IntroSection } from "@/components/IntroSection";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  return (
    <div className="p-10 flex flex-col gap-10">
      <ProfileSection />
      <IntroSection />
      <ExperienceSection />
    </div>
  );
}
