
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
        <ViewTransition >
            <section aria-label="section-hero" id="sectionhero" className="relative overflow-hidden z-30">
                <div className="mx-auto max-w-85.75 md:max-w-177 lg:max-w-277.5 z-20">
                    <div className="flex flex-col-reverse md:flex-row md:items-end items-center lg:items-center justify-center gap-10 md:justify-between md:gap-0 md:h-150 lg:h-180">
                        <div className="space-y-6 md:space-y-8.5 lg:space-y-16.5 text-center text-pretty md:text-left md:max-w-111.25 lg:max-w-177 relative z-30">
                            <div className="space-y-6 md:space-y-15 lg:space-y-9">
                                <h1 className="text-heading-xl text-base-white md:hidden lg:block">Nice to meet you! I’m <b className="border-b-4 border-base-green">Adam Keyes</b>.</h1>
                                <h1 className="text-heading-xl text-base-white hidden md:block lg:hidden">Nice to <br /> meet you! I’m <b className="border-b-4 border-base-green">Adam Keyes</b>.</h1>
                                <p className="text-base leading-6.5 tracking-normal font-medium text-base-grey md:text-lg md:leading-7 lg:max-w-[60%] ">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
                            </div>
                            <ButtonLink text="Contact Me" url="#formcontact" />
                        </div>
                        <div className="relative max-w-43.5 md:max-w-80.5 lg:max-w-111.25 md:absolute md:right-0 lg:right-42 2xl:right-[14%] md:top-0 z-20">
                            <Image src={ImageProfileDesktop} alt="Image Profile" loading="eager" className="w-full h-auto not-lg:hidden" />
                            <Image src={ImageProfileTablet} alt="Image Profile" loading="eager" className="not-md:hidden lg:hidden w-full h-auto" />
                            <Image src={ImageProfileMobile} alt="Image Profile" loading="eager" className="md:hidden" />
                        </div>
                    </div>
                </div>

                <img src={PatternRings.src} alt="Pattern Image" className="absolute top-[20%] left-[-55%] md:top-[20%] md:left-[-35%] lg:top-[15%] lg:left-[-7%] 2xl:top-[15%] 2xl:left-[5%] w-fit h-auto z-10" />
                <img src={PatternCircle.src} alt="Pattern Image" className="absolute top-[37.5%] right-[-17.5%] md:top-[77.5%] md:right-[-7.5%] lg:top-[72%] lg:right-[38%] 2xl:top-[72.5%] 2xl:right-[33.75%] w-fit h-auto z-20" />
            </section>
        </ViewTransition>
    );
}