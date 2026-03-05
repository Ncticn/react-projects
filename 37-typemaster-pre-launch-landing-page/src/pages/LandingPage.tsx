import IconBase from "../components/IconBase";

export default function LandingPage() {
  const features = [
    {
      icon: "icon-compatible",
      title: "HIGHLY COMPATIBLE",
      description:
        "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.",
    },
    {
      icon: "icon-bluetooth",
      title: "WIRELESS WITH BLUETOOTH",
      description:
        "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.",
    },
    {
      icon: "icon-battery",
      title: "HIGH CAPACITY BATTERY",
      description:
        "Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.",
    },
    {
      icon: "icon-light",
      title: "RGB BACKLIT MODES",
      description:
        "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.",
    },
  ] as const;

  return (
    <>
      <section className="section-features" aria-label="Section Features">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div className="card-feature" key={index}>
              <div className="flex flex-col gap-12">
                <IconBase iconType={feature.icon} />
                <div className="card-feature-content space-y-6">
                  <h2 className="text-preset-3 max-w-[60%] text-neutral-900 lg:max-w-[75%]">
                    {feature.title}
                  </h2>
                  <p className="text-preset-5 text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
