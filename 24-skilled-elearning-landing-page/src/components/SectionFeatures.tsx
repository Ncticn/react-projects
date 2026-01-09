import CardFeature from "./CardFeature";

const featuresData = [
  {
    id: "1",
    title: "Animation",
    description:
      "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    iconUrl: "../icons/icon-animation.svg",
  },
  {
    id: "2",
    title: "Design",
    description:
      "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    iconUrl: "../icons/icon-design.svg",
  },
  {
    id: "3",
    title: "Photography",
    description:
      "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    iconUrl: "../icons/icon-photography.svg",
  },
  {
    id: "4",
    title: "Crypto",
    description:
      "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    iconUrl: "../icons/icon-crypto.svg",
  },
  {
    id: "5",
    title: "Business",
    description:
      "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    iconUrl: "../icons/icon-business.svg",
  },
];

function CardTitle() {
  return (
    <div className="gradient-preset-1 h-full w-full rounded-[15px] px-8 pt-8 pb-8 drop-shadow-[0_25px_50px_rgba(6,22,141,4.42%)] md:min-h-80.5 md:max-w-82 md:pt-16 md:pb-10 lg:max-w-88">
      <p className="text-preset-3 h-full text-white">
        Check out our most popular courses!
      </p>
    </div>
  );
}

function SectionFeatures() {
  return (
    <section aria-label="Section Features">
      <div className="w-full bg-linear-to-b from-white from-0% to-[#F0F1FF] to-100% px-5 pt-16 pb-20 md:px-10 md:pb-36 lg:px-20">
        <div className="max-w-full lg:mx-auto lg:max-w-280">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-14 md:gap-y-14 lg:gap-x-8">
            <CardTitle />
            {featuresData.map((feature) => (
              <CardFeature
                key={feature.id}
                title={feature.title}
                description={feature.description}
                iconUrl={feature.iconUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFeatures;
