// NextJS
import Image from "next/image";

// Components
import CardValueComparison from "../CardValueComparison";
import SelectedSocialMedia from "@/src/utils/SelectedSocialMedia";
import FormatNumber from "@/src/utils/FormatNumber";

// Props
interface CardDataProps {
    socialMedia: "facebook" | "instagram" | "twitter" | "youtube";
    userName: string;
    description: string;
    followers: number;
    oldValue: number;
}


export default function CardData({ socialMedia, userName, followers, oldValue, description }: CardDataProps) {
    let socialMediaClass = "";
    switch (socialMedia) {
        case "facebook":
            socialMediaClass = "before:bg-blue-600";
            break;
        case "instagram":
            socialMediaClass = "before:from-0% before:from-[#DF4896] before:via-50% before:via-[#EE877E] before:to-100% before:to-[#FDC366] before:bg-linear-to-tr";
            break;
        case "twitter":
            socialMediaClass = "before:bg-blue-500";
            break;
        case "youtube":
            socialMediaClass = "before:bg-red-700";
            break;

    }
    return (
        <article>
            <div className={`bg-navy-50 dark:bg-navy-950 w-full rounded-[5px] px-16 py-8 relative overflow-hidden before:w-full before:h-1 before:absolute before:top-0 before:inset-x-0 ${socialMediaClass}`}>
                <div className="flex flex-col items-center justify-center gap-6">
                    <UserName socialMedia={socialMedia} userName={userName} />
                    <UserFollowers followers={followers} text={description} />
                    <CardValueComparison description=" Today" newValue={followers} oldValue={oldValue} type="difference" />
                </div>
            </div>
        </article>
    );
}


function UserName({ socialMedia, userName }: { socialMedia: "facebook" | "instagram" | "twitter" | "youtube", userName: string }) {
    let selectedSocialMedia = SelectedSocialMedia(socialMedia);

    return (
        <div className="user-account flex flex-row items-center justify-start gap-2">
            <Image src={selectedSocialMedia} alt={`Icon ${socialMedia}`} />
            <span className="account-username text-preset-6 text-gray-400">{userName}</span>
        </div>
    );
}

function UserFollowers({ followers, text }: { followers: number, text:string }) {
    return (
        <div className="user-followers flex flex-col items-center justify-center gap-2">
            <span className="text-preset-1 text-gray-950 dark:text-white">{FormatNumber(followers)}</span>
            <p className="text-preset-6-regular text-gray-400">{text}</p>
        </div>
    );
}