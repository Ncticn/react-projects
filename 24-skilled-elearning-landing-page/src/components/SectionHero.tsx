import ButtonBase from "./ButtonBase";

export default function SectionHero() {
  return (
    <section aria-label="Section Hero">
      <div className="px-5 py-16 md:px-11 lg:px-20 lg:py-28">
        <div className="mx-auto lg:max-w-280">
          <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-8">
            <div className="section-hero-content max-w-136 space-y-10">
              <div className="space-y-6 text-start">
                <h1 className="text-preset-1 text-blue-900">
                  Maximize skill, minimize budget
                </h1>
                <p className="text-preset-5 text-grey md:max-w-4/5">
                  Our modern courses across a range of in-demand skills will
                  give you the knowledge you need to live the life you want.
                </p>
              </div>
              <ButtonBase buttonType="orange" content="Get Started" />
            </div>
            <div className="section-hero-image w-full md:h-117.5 md:w-xl">
              <picture className="block md:absolute md:-top-6 md:-right-72 lg:-top-40 lg:-right-86 2xl:-top-40 2xl:-right-28">
                <source
                  srcSet="../images/image-hero-desktop.png"
                  media="(width > 768px)"
                />
                <source
                  srcSet="../images/image-hero-tablet.png"
                  media="(width > 375px)"
                />
                <source
                  srcSet="../images/image-hero-mobile@2x.png"
                  media="(width > 0px)"
                />
                <img
                  src="../images/image-hero-mobile@2x.png"
                  alt="Section Hero Image"
                  className="not-md:scale-125"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
