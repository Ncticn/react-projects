import InputWithButton from "../components/InputWithButton";
import LogoBrand from "../components/LogoBrand";
import LogoList from "../components/LogoList";

import logos from "../data/logos.json";

function LandingPage() {
  return (
    <section className="pod-request-access">
      <div className="max-w-76 md:max-w-2xl lg:max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="section-main flex flex-col items-center justify-center gap-14 md:items-start md:justify-start md:gap-26  md:max-w-148 lg:max-w-184 z-50">
            <LogoBrand />
            <div className="section-main-content flex flex-col items-center md:items-start justify-center gap-10 md:pe-16 md:pt-22 md:bg-blue-950 w-full transition">
              <div className="section-main-content-head space-y-4 md:space-y-6 text-center md:text-start">
                <h1 className="text-preset-1 text-green-base">
                  Publish your podcasts{" "}
                  <span className="text-white">everywhere.</span>
                </h1>
                <p className="text-preset-2 text-blue-300">
                  Upload your audio to Pod with a single click. We’ll then
                  distribute your podcast to Spotify, Apple Podcasts, Google
                  Podcasts, Pocket Casts and more!
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full order-1 md:order-0"
              >
                <InputWithButton />
              </form>
              <LogoList logoItems={logos} className="order-0 md:order-1" />
            </div>
          </div>
          <picture className="absolute not-md:inset-0 md:top-0 md:right-0 lg:right-0 lg:top-38 2xl:right-60 not-md:after:absolute not-md:after:inset-0 not-md:after:bg-blue-950 not-md:after:opacity-80 md:before:bg-[url('assets/patterns/bg-pattern-dots.svg')] md:before:absolute md:before:inline-block md:before:w-58 md:before:h-26 md:before:right-0 md:before:-bottom-14 2xl:md:before:-bottom-22 md:before:bg-no-repeat md:before:bg-contain md:before:z-40">
            <source
              srcSet="assets/images/image-host-desktop.jpg"
              media="(width > 768px)"
            />
            <source
              srcSet="assets/images/image-host-tablet.jpg"
              media="(width > 375px)"
            />
            <source
              srcSet="assets/images/image-host-mobile.jpg"
              media="(width >= 0px)"
            />
            <img
              src="assets/images/image-host-desktop.jpg"
              className="object-cover not-md:h-screen not-md:w-screen 2xl:scale-110"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
