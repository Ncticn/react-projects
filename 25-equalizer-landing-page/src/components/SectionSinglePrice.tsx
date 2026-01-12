import ButtonBase from "./ButtonBase";

export default function SectionSinglePrice() {
  return (
    <section aria-label="Section Single Price">
      <div className="relative py-50 md:px-10 lg:px-0">
        <div className="mx-auto max-w-full md:max-w-170 lg:max-w-280">
          <div className="bg-slate-base relative max-h-full md:max-h-150 md:rounded-xl">
            <div className="z-20 flex flex-col items-center justify-center md:flex-row lg:gap-32">
              <div className="section-single-price-image relative bottom-30 z-20 md:left-3">
                <img
                  src="/assets/images/illustration-app.png"
                  className="max-h-160.5 max-w-67.5 lg:max-w-92.25"
                  alt="Illustration App Phone Image"
                />
              </div>
              <div className="card-single-price relative z-20 md:top-20 md:right-10">
                <div className="bg-orange-base max-w-full px-5 py-12 md:max-w-89 md:rounded-2xl md:px-12 lg:max-w-lg lg:px-14 lg:py-14">
                  <div className="flex flex-col items-stretch justify-start gap-12">
                    <div className="card-single-price-content text-slate-base space-y-10">
                      <div className="space-y-6">
                        <h2 className="text-preset-3">Premium EQ</h2>
                        <p className="text-preset-4">
                          Get expert-level control with a robust equalizer,
                          volume mixer, and spatial audio. Take your listening
                          experience to a whole new level and access all our
                          incredible features!
                        </p>
                      </div>
                      <div className="inline-flex flex-row items-center justify-center gap-4">
                        <p className="text-preset-2">$4</p>
                        <p className="text-preset-4">/ month</p>
                      </div>
                    </div>
                    <div className="card-single-price-buttons space-y-4">
                      <ButtonBase
                        icon="ios"
                        type="dark"
                        ariaLabel="Downloading for Ios"
                      />
                      <ButtonBase
                        icon="android"
                        type="light"
                        ariaLabel="Downloading for Android"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <figure
              aria-hidden="true"
              className="absolute top-24 right-0 left-0 z-10 object-contain not-md:w-full md:top-0 lg:left-[31%]"
            >
              <img
                src="/assets/patterns/bg-pattern-2.svg"
                alt="Background Pattern Second Image"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
