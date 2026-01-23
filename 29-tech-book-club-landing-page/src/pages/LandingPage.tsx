import HeaderBase from "../components/HeaderBase";
import SectionAbout from "../components/SectionAbout";
import SectionFeatures from "../components/SectionFeatures";
import SectionHero from "../components/SectionHero";
import SectionInfo from "../components/SectionInfo";
import SectionPricing from "../components/SectionPricing";
import SectionTestimonial from "../components/SectionTestimonial";

export default function LandingPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-neutral-100 bg-[url(src/assets/patterns/pattern-light-bg.svg)] bg-cover px-4 pt-6 pb-20 md:px-8 md:pt-8 lg:px-33.75">
        <div className="mx-auto max-w-full lg:max-w-6xl">
          <div className="flex flex-col items-start justify-center gap-12 md:gap-16 lg:gap-20">
            <HeaderBase />
            <SectionHero />
          </div>
        </div>
      </div>
      <SectionAbout />
      <SectionInfo />
      <SectionFeatures />
      <SectionPricing />
      <SectionTestimonial />
    </>
  );
}
