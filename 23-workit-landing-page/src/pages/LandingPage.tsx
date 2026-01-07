import HeaderBase from "../components/HeaderBase";
import SectionCTA from "../components/SectionCTA";
import SectionFeature from "../components/SectionFeatures";
import SectionHero from "../components/SectionHero";

export default function LandingPage() {
  return (
    <main>
      <div className="bg-purple-900">
        <HeaderBase />
        <SectionHero />
        <img
          src="../patterns/ornamental.svg"
          alt="Background Pattern Image"
          className="w-full min-h-10 object-cover"
        />
      </div>
      <div className="relative h-20 md:h-50">
        <img
          src="../images/image-hero.webp"
          alt="Section Hero Image"
          className="object-contain max-w-75 md:max-w-lg lg:max-w-2xl absolute -top-24 right-1/12 md:-top-32 md:right-1/6 lg:-top-62 lg:right-1/4"
        />
      </div>
      <SectionFeature />
      <SectionCTA />
    </main>
  );
}
