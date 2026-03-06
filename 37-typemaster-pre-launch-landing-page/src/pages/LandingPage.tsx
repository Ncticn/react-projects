import ButtonBase from "../components/ButtonBase";
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
      <section
        className="section-hero space-y-6 md:space-y-10"
        aria-label="Section Hero"
      >
        <div className="mx-auto">
          <div className="flex flex-col items-center justify-center gap-16 md:flex-row md:gap-12 lg:gap-31.25">
            <div className="section-main-content max-w-full px-4 md:ms-8 md:max-w-90 md:px-0 lg:ms-0 lg:max-w-111.25">
              <div className="flex flex-col gap-8 md:gap-10">
                <div className="section-content space-y-6 md:space-y-8 lg:space-y-6">
                  <h1 className="text-preset-1 text-neutral-900">
                    Typemaster Keyboard
                  </h1>
                  <p className="text-preset-4 text-neutral-400">
                    Improve your productivity and gaming without breaking the
                    bank. Upgrade to a high quality mechanical typing
                    experience.
                  </p>
                </div>
                <div className="section-buttons">
                  <div className="flex w-full flex-row items-center justify-start gap-6 lg:gap-10">
                    <ButtonBase
                      buttonType="primary"
                      buttonText="Pre-order now"
                    />
                    <span className="text-preset-6 text-neutral-400 uppercase">
                      Release on 5/27
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-main-image h-full w-full ps-6 md:h-106.25 md:ps-8 lg:h-120 lg:w-135">
              <div className="relative h-full w-full overflow-hidden rounded-s-[20px] lg:rounded-[20px]">
                <picture>
                  <source
                    media="(min-width > 768px)"
                    srcSet="images/desktop/image-keyboard.jpg"
                  />
                  <source
                    media="(min-width > 375px)"
                    srcSet="images/tablet/image-keyboard.jpg"
                  />
                  <source
                    media="(min-width > 0)"
                    srcSet="images/mobile/image-keyboard.jpg"
                  />
                  <img
                    src="images/desktop/image-keyboard.jpg"
                    alt="Image Keyboard"
                    className="h-full w-full object-cover object-center md:object-left"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto md:max-w-172.25 lg:max-w-277.5">
          <div className="flex flex-col justify-start gap-16 md:items-stretch md:gap-10 lg:flex-row lg:items-center lg:gap-31.25">
            <div className="section-images flex flex-row items-center justify-start gap-6 pe-6 md:gap-8 md:pe-0 lg:gap-7.5">
              <div className="image-mask w-1/3">
                <div className="image-mask-body h-48.25 w-fit overflow-hidden rounded-r-[20px] bg-orange-500 md:h-80 md:rounded-[20px] lg:h-120">
                  <picture>
                    <source
                      media="(width > 768px)"
                      srcSet="images/desktop/image-phone-and-keyboard.jpg"
                    />
                    <source
                      media="(width > 375px)"
                      srcSet="images/tablet/image-phone-and-keyboard.jpg"
                    />
                    <source
                      media="(width >= 0px)"
                      srcSet="images/mobile/image-phone-and-keyboard.jpg"
                    />
                    <img
                      src="images/desktop/image-phone-and-keyboard.jpg"
                      alt="Image Phone and Keyboard"
                      className="h-full w-full object-cover opacity-75 mix-blend-multiply"
                    />
                  </picture>
                </div>
              </div>
              <div className="section-img h-48.25 w-2/3 overflow-hidden rounded-[20px] md:h-80 lg:h-120">
                <img
                  src="images/desktop/image-glass-and-keyboard.jpg"
                  alt="Image Glass and Keyboard"
                />
              </div>
            </div>

            <div className="section-content flex max-w-85.75 flex-col items-start justify-center gap-6 not-md:mx-auto md:max-w-full md:flex-row md:justify-between md:gap-0 lg:max-w-63.75 lg:flex-col lg:justify-start lg:gap-5">
              <h2 className="text-preset-2 text-neutral-900">
                mechanical <br /> wireless <br />
                Keyboard
              </h2>
              <p className="text-preset-5 w-full text-neutral-400 md:max-w-99">
                The Typemaster keyboard boasts top-notch build and practical
                design. It offers a wide variety of switches and keycaps, along
                with reliable wireless connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-features" aria-label="Section Features">
        <div className="mx-auto max-w-85.75 md:max-w-176 lg:max-w-279">
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
        </div>
      </section>
    </>
  );
}
