import ButtonBase from "./ButtonBase";

export default function FooterBase() {
  return (
    <>
      <footer>
        <div className="relative bg-[url(src/assets/images/image-footer-mobile.jpg)] bg-cover bg-top bg-no-repeat px-8 py-16 before:absolute before:inset-0 before:bg-cyan-600 before:opacity-80 md:bg-[url(src/assets/images/image-footer-tablet.jpg)] md:bg-center lg:bg-[url(src/assets/images/image-footer.jpg)] lg:px-20 lg:py-28">
          <div className="relative z-20 mx-auto max-w-76 md:max-w-126 lg:max-w-280">
            <div className="flex flex-col items-center justify-center gap-6 text-center lg:flex-row lg:gap-8 lg:text-start">
              <p className="text-preset-2 text-white-base lg:basis-md">
                Experience more together
              </p>
              <p className="text-preset-4 text-white-base lg:basis-88">
                Stay connected with reliable HD meetings and unlimited
                one-on-one and group video sessions.
              </p>
              <div className="md:text-end lg:basis-3xs">
                <ButtonBase
                  buttonColor="purple"
                  text="Download"
                  extraText="v1.3"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
