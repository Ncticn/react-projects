// Sections
import SectionProjects from "../components/sections/SectionProjects";
import SectionSkills from "../components/sections/SectionSkills";
import SectionHero from "../components/sections/SectionHero";

// Pattern Image
import PatternRings from "@/src/assets/patterns/pattern-rings.svg";

export default function Home() {
  return (
    <div className="relative flex flex-col items-stretch justify-center gap-20 md:gap-15 lg:gap-35">
      <SectionHero />
      <SectionSkills />
      <img
        src={PatternRings.src}
        alt="Pattern Image"
        className="absolute top-[32%] right-[-60%] z-10 h-auto w-fit md:top-[40%] md:right-[-45%] lg:top-[36%] lg:right-[-18%] 2xl:top-[38%] 2xl:right-[10%]"
      />
      <SectionProjects />
    </div>
  );
}
