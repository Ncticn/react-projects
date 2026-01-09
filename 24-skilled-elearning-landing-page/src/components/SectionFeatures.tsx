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
    <div className="gradient-preset-1 px-8 pt-8 pb-8 md:pt-16 md:pb-10 rounded-[15px] drop-shadow-[0_25px_50px_rgba(6,22,141,4.42%)] md:max-w-82 lg:max-w-88 w-full md:min-h-80.5 h-full">
      <p className="text-preset-3 text-white h-full">
        Check out our most popular courses!
      </p>
    </div>
  );
}

function SectionFeatures() {
  return (
    <section aria-label="Section Features">
      <div className="px-5 pb-20 md:px-10 lg:px-20 pt-16 md:pb-36 w-full">
        <div className="max-w-full lg:max-w-280 lg:mx-auto">
          <div className="flex items-center justify-center flex-wrap gap-y-14 gap-x-6 md:gap-y-14 lg:gap-x-8">
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
