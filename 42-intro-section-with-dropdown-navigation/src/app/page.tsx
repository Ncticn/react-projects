import ButtonPrimary from "@/components/ButtonPrimary";

// Client Logos
import Image from "next/image";

// Hero Images
import HeroImageDesktop from "@/assets/images/image-hero-desktop.png";

export default function Home() {
  const clientLogos = [
    {
      id: 1,
      name: "Databiz",
      url: "/assets/logos/client-databiz.svg",
    },
    {
      id: 2,
      name: "Audiophile",
      url: "/assets/logos/client-audiophile.svg",
    },
    {
      id: 3,
      name: "Meet",
      url: "/assets/logos/client-meet.svg",
    },
    {
      id: 4,
      name: "Maker",
      url: "/assets/logos/client-maker.svg",
    },
  ];

  return (
    <section>
      <div className="lg:mx-auto lg:max-w-286.25">
        <div className="grid grid-cols-1 grid-rows-2 items-end justify-center gap-12 md:grid-rows-[576px] md:gap-16 lg:grid-cols-2 lg:grid-rows-[640px] lg:gap-31.25">
          <div className="order-2 col-span-1 row-span-1 flex h-full flex-col items-stretch justify-start gap-12 md:gap-28 lg:order-1 lg:justify-center">
            <div className="section-text-content flex flex-col items-center justify-start gap-6 text-center md:gap-8 lg:items-start lg:gap-12 lg:text-start">
              <h1 className="text-preset-1 text-balance text-gray-950">
                Make remote work
              </h1>
              <p className="text-preset-4 tracking-0px max-w-[80%] font-medium text-gray-500 md:max-w-[70%] lg:max-w-[80%]">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
              <ButtonPrimary text="Learn more" />
            </div>
            <div className="section-logos flex flex-row items-center justify-start gap-6 px-4 md:gap-14 md:px-11 lg:gap-10 lg:px-0">
              {clientLogos.map((logo) => (
                <img
                  src={logo.url}
                  alt={`Icon Client ${logo.name}`}
                  key={logo.id}
                  className="w-full"
                />
              ))}
            </div>
          </div>
          <div className="relative order-1 col-span-1 row-span-1 h-full lg:order-2">
            <picture>
              <source
                media="(min-width: 769px)"
                srcSet="/assets/images/image-hero-desktop.png"
              />
              <source
                media="(max-width: 768px)"
                srcSet="/assets/images/image-hero-mobile.png"
              />
              <Image
                src={HeroImageDesktop}
                alt="Image Hero"
                placeholder="blur"
                fill
                sizes="(min-width: 769px) 100vw, 100vw"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
