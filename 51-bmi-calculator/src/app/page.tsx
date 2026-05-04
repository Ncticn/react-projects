import Header from "../components/layout/Header";
import SectionAbout from "../components/layout/SectionAbout";
import SectionHero from "../components/layout/SectionHero";
import SectionLimitations from "../components/layout/SectionLimitations";
import SectionTips from "../components/layout/SectionTips";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-stretch justify-center gap-8">
      <div className="relative space-y-10 overflow-hidden px-6 not-lg:pt-8 md:px-10 not-lg:md:pt-8 lg:space-y-6 lg:px-36 lg:py-22">
        <Header />
        <SectionHero />
        <div className="absolute inset-0 z-10 h-160 rounded-b-[35px] bg-linear-to-r from-transparent from-0% to-[#D6E6FE] to-100% md:w-full lg:h-full lg:w-[70%]"></div>
      </div>
      <SectionAbout />
      <SectionTips />
      <SectionLimitations />
    </div>
  );
}
