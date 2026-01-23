interface FeaturesStepProps {
  title: string;
  counter: string;
}

function FeaturesStep({ title, counter }: FeaturesStepProps) {
  return (
    <div className="features-step relative space-y-6 lg:max-w-[226.5px] not-last:lg:before:absolute not-last:lg:before:top-0 not-last:lg:before:right-0 not-last:lg:before:h-5 not-last:lg:before:w-20 not-last:lg:before:bg-[url(../patterns/pattern-arrow.svg)] not-last:lg:before:bg-center not-last:lg:before:bg-no-repeat">
      <div className="flex size-10 items-center justify-center rounded-sm border-2 border-y-neutral-900 py-4">
        <span className="text-preset-6 text-neutral-900">{counter}</span>
      </div>
      <h4 className="text-preset-6 text-neutral-900">{title}</h4>
    </div>
  );
}

function SectionFeatures() {
  return (
    <section aria-label="Section Features">
      <div className="mx-auto max-w-85 md:max-w-176 lg:max-w-292.5">
        <div className="relative overflow-hidden rounded-xl bg-neutral-100 bg-[url(../patterns/pattern-light-bg.svg)] bg-cover bg-no-repeat px-4 py-16 md:px-8 md:py-20 lg:px-0">
          <div className="relative z-20 flex flex-col items-stretch justify-start gap-8 md:gap-12 lg:items-center lg:gap-16">
            <h2 className="text-preset-2 max-w-full text-start text-neutral-900 lg:max-w-3/7 lg:text-center">
              Your tech reading journey
            </h2>
            <div className="features-step-wrapper flex flex-col gap-12 lg:flex-row">
              <FeaturesStep counter="1" title="Choose your membership tier" />
              <FeaturesStep
                counter="2"
                title="Get your monthly book selection"
              />
              <FeaturesStep counter="3" title="Join our discussion forums" />
              <FeaturesStep counter="4" title="Attend exclusive meetups" />
            </div>
          </div>
          <img
            src="../patterns/pattern-glow.svg"
            alt=""
            className="absolute -right-[35%] -bottom-[35%] z-10 size-171 object-fill object-center md:-right-[25%] md:-bottom-[25%] lg:-right-[20%] lg:-bottom-[60%]"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionFeatures;
