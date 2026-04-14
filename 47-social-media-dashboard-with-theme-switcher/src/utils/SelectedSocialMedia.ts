import IconFacebook from "@/src/assets/icons/icon-facebook.svg";
import IconTwitter from "@/src/assets/icons/icon-twitter.svg";
import IconInstagram from "@/src/assets/icons/icon-instagram.svg";
import IconYoutube from "@/src/assets/icons/icon-youtube.svg";

export default function SelectedSocialMedia(
  socialMedia: "facebook" | "twitter" | "instagram" | "youtube",
) {
  let selectedMedia;

  switch (socialMedia) {
    case "facebook":
      selectedMedia = IconFacebook;
      break;
    case "twitter":
      selectedMedia = IconTwitter;
      break;
    case "instagram":
      selectedMedia = IconInstagram;
      break;
    case "youtube":
      selectedMedia = IconYoutube;
      break;
  }

  return selectedMedia;
}
