import ButtonWithArrowDown from "./ButtonWithArrowDown";
import TestimonialTotal from "./TestimonialTotal";

function SectionHero() {
  return (
    <section aria-label="Section Hero">
      <div className="flex flex-col items-center justify-start gap-16 lg:flex-row">
        <div className="section-main flex flex-col items-start justify-start gap-8">
          <div className="section-main-content space-y-6">
            <h1 className="text-preset-1 gradient-text bg-clip-text text-transparent">
              Join the ultimate tech book club
            </h1>
            <p className="text-preset-5 text-start text-pretty text-neutral-700">
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </p>
          </div>
          <div className="section-main-cta flex flex-col items-stretch gap-5">
            <ButtonWithArrowDown text="REVIEW MEMBERSHIP OPTIONS" />
            <TestimonialTotal theme="light" />
          </div>
        </div>
        <div className="section-image">
          <div className="overflow-hidden rounded-lg lg:min-w-135">
            <img
              src="../images/image-hero-desktop.webp"
              alt=""
              className="h-auto w-full"
            />
          </div>
        </div>
        <img
          src="../patterns/pattern-glow.svg"
          alt="Background Pattern Circle Image"
          className="absolute -right-60 -bottom-60 size-171 object-contain"
        />
      </div>
    </section>
  );
}

export default SectionHero;
