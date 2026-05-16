import Link from "next/link";
import IconGithub from "@/src/assets/icons/icon-github.svg";
import IconFrontendMentor from "@/src/assets/icons/icon-frontend-mentor.svg";
import IconLinkedin from "@/src/assets/icons/icon-linkedin.svg";
import IconTwitter from "@/src/assets/icons/icon-twitter.svg";

export default function Header() {
    const socialMedia = [
        {
            icon: IconGithub,
            name: "Github"
        },
        {
            icon: IconFrontendMentor,
            name: "Frontend Mentor"
        },
        {
            icon: IconLinkedin,
            name: "Linkedin"
        },
        {
            icon: IconTwitter,
            name: "Twitter"
        }
    ];

    return (
        <header className="w-full absolute z-50 top-5 md:top-9">
            <div className="mx-auto lg:max-w-277.5 md:max-w-177 max-w-86.25">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 md:gap-0">
                    <Link href={"#"} aria-label="Go to homepage" className="font-bold text-2xl md:text-[2rem] leading-8  tracking-[-0.33px] md:tracking-[-0.44px] text-base-white">adamkeyes</Link>

                    <div className="social-media-links flex flex-row items-center justify-center gap-6.5 md:gap-8 lg:pe-7">
                        {
                            socialMedia.map((media, index) => (
                                <Link href={"#"} aria-label={`Go to ${media.name}`} key={index} className="text-white size-5 md:size-6">
                                    <img src={media.icon.src} alt={`Icon ${media.name}`} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}