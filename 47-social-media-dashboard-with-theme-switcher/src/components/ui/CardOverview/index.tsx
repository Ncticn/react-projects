import Image from "next/image";

import SelectedSocialMedia from "@/src/utils/SelectedSocialMedia";
import CardValueComparison from "../CardValueComparison";
import FormatNumber from "@/src/utils/FormatNumber";


interface CardOverviewProps {
    socialMedia: "facebook" | "twitter" | "instagram" | "youtube",
    title: string,
    views: number,
    stats: {
        newValue: number,
        oldValue: number
    }

}

function CardOverview({ socialMedia, title, views, stats }: CardOverviewProps) {

    const selectedMedia = SelectedSocialMedia(socialMedia);

    return (
        <article>
            <div className="bg-navy-50 dark:bg-navy-950 px-6 py-6 rounded-[5px] w-full">
                <div className="flex flex-row items-stretch justify-between">
                    <div className="card-overview-title flex flex-col items-start justify-start gap-6">
                        <h3 className="text-preset-5 text-gray-650 dark:text-gray-400">{title}</h3>
                        <p className="text-preset-2 text-gray-950 dark:text-white">{FormatNumber(views)}</p>
                    </div>

                    <div className="card-overview-stats flex flex-col items-end justify-start gap-10">
                        <Image src={selectedMedia} alt="" />
                        <CardValueComparison newValue={stats.newValue} oldValue={stats.oldValue} description="%" type="percent" />
                    </div>
                </div>
            </div>
        </article>
    );
}

export default CardOverview;