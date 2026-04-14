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
      <div className="mx-auto max-w-80.5 md:max-w-135.5 lg:max-w-279">
        <div className="flex flex-col items-stretch justify-start gap-12">
          <div className="container-social-media flex flex-col gap-12">
            <div className="flex flex-col items-stretch justify-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
              <div>
                <h1 className="text-preset-3 text-gray-950 dark:text-white">
                  Social Media Dashboard
                </h1>
                <p className="text-preset-5 text-gray-650 dark:text-gray-400">
                  Total Followers: {db.dashboard.totalFollowers}
                </p>
              </div>
              <div className="divider dark:bg-navy-900 block h-px w-full bg-gray-600 lg:hidden"></div>
              <div className="flex flex-row items-center justify-between gap-4 lg:justify-start">
                <p className="text-preset-5 text-gray-600 dark:text-gray-400">
                  Dark Mode
                </p>
                <Toggle />
              </div>
            </div>
            <div className="grid w-full grid-cols-1 grid-rows-4 items-center justify-center gap-6 md:grid-cols-2 md:grid-rows-2 md:gap-8 lg:grid-cols-4 lg:grid-rows-1">
              {db.accounts.map((item, i) => (
                <CardData
                  key={i}
                  socialMedia={item.platform.toLowerCase() as SocialMedia}
                  description={
                    item.platform === "YouTube" ? "SUBSCRIBERS" : "Followers"
                  }
                  followers={item.followers}
                  userName={item.username}
                  oldValue={item.change}
                />
              ))}
            </div>
          </div>

          <div className="container-overview flex flex-col items-stretch justify-center gap-6">
            <h2 className="text-preset-4 text-gray-650 dark:text-white">
              Overview - Today
            </h2>
            <div className="grid w-full grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              {db.overviewToday.map((subItem, _i) => (
                <CardOverview
                  key={_i}
                  socialMedia={subItem.platform.toLowerCase() as SocialMedia}
                  title={subItem.metric}
                  views={subItem.value}
                  stats={{ newValue: subItem.value, oldValue: subItem.change }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
