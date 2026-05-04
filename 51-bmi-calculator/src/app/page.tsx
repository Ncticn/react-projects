
import Header from "../components/layout/Header";
import SectionAbout from "../components/layout/SectionAbout";
import SectionHero from "../components/layout/SectionHero";
import SectionLimitations from "../components/layout/SectionLimitations";
import SectionTips from "../components/layout/SectionTips";


export default function Home() {

  return (
    <div className="flex flex-col items-stretch justify-center gap-8 w-full">
      <div className="space-y-10 lg:space-y-6 px-6 not-lg:pt-8 md:px-10 not-lg:md:pt-8 lg:px-36 lg:py-22 relative overflow-hidden">
        <Header />
        <SectionHero />
        <div className="absolute inset-0 md:w-full lg:w-[70%] h-160 lg:h-full z-10 rounded-b-[35px] bg-linear-to-r from-0% from-transparent to-100% to-[#D6E6FE]"></div>
      </div>
      <SectionAbout />
      <SectionTips />
      <SectionLimitations />
    </div>
  );
}
