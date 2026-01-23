export default function SectionInfo() {
  return (
    <section aria-label="Section Info">
      <div className="px-4 md:px-8 lg:px-0">
        <div className="mx-auto max-w-full lg:max-w-292.5">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-20">
            <div className="space-y-6 text-start lg:w-1/2">
              <h2 className="text-preset-2 relative text-neutral-900 md:max-w-4/5 lg:max-w-full">
                Not your average book
                <span className="bg-[url(src/assets/patterns/pattern-circle.png)] bg-contain bg-center bg-no-repeat px-4 py-5">
                  club
                </span>
              </h2>
              <p className="text-preset-5 text-neutral-700 lg:max-w-132">
                Connect with a community that speaks your language - from{" "}
                <b>Python </b>
                to <b>TypeScript</b> and everything in between. Our discussions
                blend technical depth with practical applications.
              </p>
            </div>
            <div className="relative lg:w-1/2">
              <figure className="overflow-hidden rounded-[20px] lg:max-w-140">
                <img
                  src="src/assets/images/image-not-average-desktop.webp"
                  alt="Not Average Image"
                  className="w-full"
                />
              </figure>
              <img
                src="src/assets/icons/logos-tech.svg"
                alt=""
                className="not-md:hidden md:absolute md:right-12.5 md:bottom-12.5 lg:bottom-8 lg:-left-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
