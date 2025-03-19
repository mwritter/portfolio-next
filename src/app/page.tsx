import { ProfileSection } from "@/components/ProfileSection";
import { IntroSection } from "@/components/IntroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { RiveComponent } from "@/components/RiveComponent";

export default function Home() {
  return (
    <div className="relative p-5 sm:p-10 flex flex-col gap-10 sm:bg-gradient-to-tr bg-gradient-to-t from-[var(--background)] sm:from-60% from-90% to-[var(--accent-color)]">
      <div className="z-10 flex flex-col sm:gap-50 gap-25">
        <ProfileSection />
        <IntroSection />
        <ExperienceSection />
      </div>
      <RiveComponent src="./sky.riv" />
    </div>
  );
}
