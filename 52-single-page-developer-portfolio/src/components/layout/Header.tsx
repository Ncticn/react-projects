import Link from "next/link";
import IconGithub from "@/src/assets/icons/icon-github.svg";
import IconFrontendMentor from "@/src/assets/icons/icon-frontend-mentor.svg";
import IconLinkedin from "@/src/assets/icons/icon-linkedin.svg";
import IconTwitter from "@/src/assets/icons/icon-twitter.svg";

export default function Header() {
  const socialMedia = [
    {
      icon: IconGithub,
      name: "Github",
    },
    {
      icon: IconFrontendMentor,
      name: "Frontend Mentor",
    },
    {
      icon: IconLinkedin,
      name: "Linkedin",
    },
    {
      icon: IconTwitter,
      name: "Twitter",
    },
  ];

  return (
    <header className="absolute top-5 z-50 w-full md:top-9">
      <div className="mx-auto max-w-86.25 md:max-w-177 lg:max-w-277.5">
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between md:gap-0">
          <Link
            href={"#"}
            aria-label="Go to homepage"
            className="text-base-white text-2xl leading-8 font-bold tracking-[-0.33px] md:text-[2rem] md:tracking-[-0.44px]"
          >
            adamkeyes
          </Link>

          <div className="social-media-links flex flex-row items-center justify-center gap-6.5 md:gap-8 lg:pe-7">
            {socialMedia.map((media, index) => (
              <Link
                href={"#"}
                aria-label={`Go to ${media.name}`}
                key={index}
                className="size-5 text-white md:size-6"
              >
                <img src={media.icon.src} alt={`Icon ${media.name}`} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
