import ButtonPrimary from "./ButtonPrimary";

function SectionCTA() {
  return (
    <section className="section-cta">
      <div className="px-5 md:px-11 lg:px-20 pt-28">
        <div className="max-w-full md:max-w-3xl lg:max-w-6xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3">
            <div className="col-span-1 lg:col-span-1 ">
              <figure className="w-70 lg:w-119.25 mx-auto">
                <img
                  src="src/assets/images/image-founder.webp"
                  alt="Image Founder"
                  className="object-contain"
                />
              </figure>
            </div>
            <div className="section-cta-content md:pt-42 col-span-3 lg:col-span-2">
              <div className="flex flex-col items-center md:items-start justify-start gap-8 p-8 md:p-12 lg:p-16 bg-purple-900 lg:max-w-182.5 relative -top-16 md:top-0">
                <h2 className="text-preset-2 text-white">
                  Be the first to test
                </h2>
                <p className="text-preset-4 text-white text-center md:text-justify lg:text-start">
                  Hi, I'm Louis Graham, the founder of the company. Book a demo
                  call with me to become a beta tester for our app and kickstart
                  your company. Apply for access below and I’ll be in touch to
                  schedule a call.
                </p>
                <ButtonPrimary>Apply for access</ButtonPrimary>
                <img
                  src="src/assets/patterns/bg-pattern-3.svg"
                  alt="Background Pattern Image"
                  className="object-contain hidden md:absolute md:right-2 lg:right-26 md:top-70 lg:top-66"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionCTA;
