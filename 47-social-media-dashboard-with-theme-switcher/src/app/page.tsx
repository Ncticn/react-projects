// Data
import db from "@/src/data/data.json";

// Components
import Toggle from "../components/ui/Toggle";
import CardData from "../components/ui/CardData";
import CardOverview from "../components/ui/CardOverview";

type SocialMedia = "facebook" | "twitter" | "instagram" | "youtube";

export default function Home() {
  return (
    <section className="relative z-20">
      <div className="max-w-80.5 md:max-w-135.5 lg:max-w-279 mx-auto">
        <div className="flex flex-col items-stretch justify-start gap-12">
          <div className="container-social-media flex flex-col gap-12">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-start lg:justify-between gap-6 lg:gap-0">
              <div>
                <h1 className="text-gray-950 dark:text-white text-preset-3">
                  Social Media Dashboard
                </h1>
                <p className="text-preset-5 text-gray-650 dark:text-gray-400">
                  Total Followers: {db.dashboard.totalFollowers}
                </p>
              </div>
              <div className="divider bg-gray-600 dark:bg-navy-900 h-px w-full block lg:hidden"></div>
              <div className="flex flex-row items-center justify-between lg:justify-start gap-4">
                <p className="text-preset-5 text-gray-600 dark:text-gray-400">Dark Mode</p>
                <Toggle />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-6 md:gap-8 items-center justify-center">
              {db.accounts.map((item, i) =>
                <CardData
                  key={i}
                  socialMedia={item.platform.toLowerCase() as SocialMedia}
                  description={item.platform === "YouTube" ? "SUBSCRIBERS" : "Followers"}
                  followers={item.followers}
                  userName={item.username} oldValue={item.change} />)
              }
            </div>
          </div>

          <div className="container-overview flex flex-col items-stretch justify-center gap-6">
            <h2 className="text-preset-4 text-gray-650 dark:text-white">Overview - Today</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center justify-center">
              {
                db.overviewToday.map((subItem, _i) =>
                  <CardOverview
                    key={_i}
                    socialMedia={subItem.platform.toLowerCase() as SocialMedia}
                    title={subItem.metric}
                    views={subItem.value}
                    stats={{ newValue: subItem.value, oldValue: subItem.change }}
                  />)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
