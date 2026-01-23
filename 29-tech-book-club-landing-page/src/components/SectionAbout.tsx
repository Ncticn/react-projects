import IconCheck from "./IconCheck";

function SectionAbout() {
  const listItem = [
    "Monthly curated tech reads selected by industry experts",
    "Virtual and in-person meetups for deep-dive discussions",
    "Early access to new tech book releases",
    "Author Q&A sessions with tech thought leaders",
  ];

  return (
    <section aria-label="Section About">
      <div className="mx-auto max-w-full px-4 md:px-8 lg:max-w-6xl lg:px-0">
        <div className="flex flex-col-reverse items-start justify-start gap-10 lg:flex-row lg:items-center lg:gap-20">
          <figure className="max-w-full overflow-hidden rounded-xl md:rounded-[25px] lg:max-w-140 lg:rounded-[20px]">
            <img
              src="src/assets/images/image-read-together-desktop.webp"
              alt="Image Read Together"
            />
          </figure>
          <div className="section-main space-y-6 md:space-y-8.5">
            <h2 className="text-preset-2 text-neutral-900">
              Read together, <br /> grow together
            </h2>

            <ul className="space-y-4 text-neutral-700 md:space-y-6 lg:max-w-4/5">
              {listItem.map((item, index) => (
                <li
                  className="flex h-full w-full items-center justify-start gap-3.5"
                  key={index}
                >
                  <div className="max-w-8">
                    <IconCheck />
                  </div>
                  <p className="text-preset-5 text-neutral-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
