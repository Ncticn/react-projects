import ButtonBase from "../components/ButtonBase";

export default function SectionHero() {
  return (
    <section aria-label="Section Hero">
      <div className="relative overflow-hidden py-16">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <figure className="md:-ms-7">
            <img
              src="../images/image-hero-left.png"
              alt="Hero Left Image"
              className="not-lg:hidden"
            />
            <img
              src="../images/image-hero-tablet.png"
              alt="Hero Tablet Image"
              className="not-sm:scale-[115%] lg:hidden"
            />
          </figure>
          <div className="mx-auto max-w-md space-y-6 text-center not-md:px-8 md:space-y-8">
            <h1 className="text-preset-1 text-slate-900">
              Group Chat <br />
              for Everyone
            </h1>
            <p className="text-preset-4 text-slate-600">
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
            <div className="mx-auto inline-flex flex-col items-center justify-center gap-4.25 sm:flex-row">
              <ButtonBase buttonColor="blue" text="Download" extraText="v1.3" />
              <ButtonBase buttonColor="purple" text="What is it?" />
            </div>
          </div>
          <figure className="not-lg:hidden md:-me-7">
            <img src="../images/image-hero-right.png" alt="Hero Left Image" />
          </figure>
        </div>
      </div>
    </section>
  );
}
