// React
import { ViewTransition } from "react";

// NextJS
import Image from "next/image";

// Components
import ButtonLink from "../ui/ButtonLink";

// Images
import ImageProfileDesktop from "@/src/assets/images/image-profile-desktop.webp";
import ImageProfileTablet from "@/src/assets/images/image-profile-tablet.webp";
import ImageProfileMobile from "@/src/assets/images/image-profile-mobile.webp";

// Pattern Image
import PatternRings from "@/src/assets/patterns/pattern-rings.svg";
import PatternCircle from "@/src/assets/patterns/pattern-circle.svg";

export default function SectionHero() {
  return (
    <ViewTransition>
      <section
        aria-label="section-hero"
        id="sectionhero"
        className="relative z-30 overflow-hidden"
      >
        <div className="z-20 mx-auto max-w-85.75 md:max-w-177 lg:max-w-277.5">
          <div className="flex flex-col-reverse items-center justify-center gap-10 md:h-150 md:flex-row md:items-end md:justify-between md:gap-0 lg:h-180 lg:items-center">
            <div className="relative z-30 space-y-6 text-center text-pretty md:max-w-111.25 md:space-y-8.5 md:text-left lg:max-w-177 lg:space-y-16.5">
              <div className="space-y-6 md:space-y-15 lg:space-y-9">
                <h1 className="text-heading-xl text-base-white md:hidden lg:block">
                  Nice to meet you! I’m{" "}
                  <b className="border-base-green border-b-4">Adam Keyes</b>.
                </h1>
                <h1 className="text-heading-xl text-base-white hidden md:block lg:hidden">
                  Nice to <br /> meet you! I’m{" "}
                  <b className="border-base-green border-b-4">Adam Keyes</b>.
                </h1>
                <p className="text-base-grey text-base leading-6.5 font-medium tracking-normal md:text-lg md:leading-7 lg:max-w-[60%]">
                  Based in the UK, I’m a front-end developer passionate about
                  building accessible web apps that users love.
                </p>
              </div>
              <ButtonLink text="Contact Me" url="#formcontact" />
            </div>
            <div className="relative z-20 max-w-43.5 md:absolute md:top-0 md:right-0 md:max-w-80.5 lg:right-42 lg:max-w-111.25 2xl:right-[14%]">
              <Image
                src={ImageProfileDesktop}
                alt="Image Profile"
                loading="eager"
                className="h-auto w-full not-lg:hidden"
              />
              <Image
                src={ImageProfileTablet}
                alt="Image Profile"
                loading="eager"
                className="h-auto w-full not-md:hidden lg:hidden"
              />
              <Image
                src={ImageProfileMobile}
                alt="Image Profile"
                loading="eager"
                className="md:hidden"
              />
            </div>
          </div>
        </div>

        <img
          src={PatternRings.src}
          alt="Pattern Image"
          className="absolute top-[20%] left-[-55%] z-10 h-auto w-fit md:top-[20%] md:left-[-35%] lg:top-[15%] lg:left-[-7%] 2xl:top-[15%] 2xl:left-[5%]"
        />
        <img
          src={PatternCircle.src}
          alt="Pattern Image"
          className="absolute top-[37.5%] right-[-17.5%] z-20 h-auto w-fit md:top-[77.5%] md:right-[-7.5%] lg:top-[72%] lg:right-[38%] 2xl:top-[72.5%] 2xl:right-[33.75%]"
        />
      </section>
    </ViewTransition>
  );
}
