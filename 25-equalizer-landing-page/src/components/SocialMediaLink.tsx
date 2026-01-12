import IconFacebook from "./IconFacebook";
import IconInstagram from "./IconInstagram";
import IconTwitter from "./IconTwitter";

type SocialMediaLinkProps = {
  mediaType: "facebook" | "instagram" | "twitter";
  className?: string;
  ariaLabel: string;
  url?: string;
};

export default function SocialMediaLink({
  mediaType,
  className,
  ariaLabel,
  url = "#",
}: SocialMediaLinkProps) {
  return (
    <a
      href={url}
      className={`text-slate-base hover:text-orange-base inline-flex items-center justify-center gap-2 ${className ? className : ""}`}
      aria-label={ariaLabel}
    >
      {mediaType === "facebook" && <IconFacebook />}
      {mediaType === "instagram" && <IconInstagram />}
      {mediaType === "twitter" && <IconTwitter />}
    </a>
  );
}
