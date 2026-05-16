// NextJS
import Link from "next/link";

// Icons
import IconGithub from "@/src/assets/icons/icon-github.svg";
import IconFrontendMentor from "@/src/assets/icons/icon-frontend-mentor.svg";
import IconLinkedin from "@/src/assets/icons/icon-linkedin.svg";
import IconTwitter from "@/src/assets/icons/icon-twitter.svg";

export default function SocialMedia() {
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
    <div className="social-media-links flex flex-row items-center justify-center gap-6.5 md:gap-8 lg:pe-7">
      {socialMedia.map((media, index) => (
        <Link
          href={"#"}
          aria-label={`Go to ${media.name}`}
          key={index}
          className="text-white"
        >
          <img
            src={media.icon.src}
            alt={`Icon ${media.name}`}
            className="size-5 md:size-6"
          />
        </Link>
      ))}
    </div>
  );
}
