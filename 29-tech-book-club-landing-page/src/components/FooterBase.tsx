import ButtonWithArrowUp from "./ButtonWithArrowUp";
import IconBluesky from "./IconBluesky";
import IconLinkedIn from "./IconLinkedIn";
import TestimonialTotal from "./TestimonialTotal";

function FooterBase() {
  return (
    <footer>
      <div className="w-full rounded-t-[20px] bg-neutral-900 bg-[url(src/assets/patterns/pattern-dark-bg.svg)] bg-cover px-4 pt-12 pb-0 md:px-8 md:pt-16 lg:px-33.75 lg:pt-20">
        <div className="flex flex-col justify-center gap-16">
          <div className="footer-content mx-auto space-y-10 md:max-w-full lg:max-w-188.25">
            <p className="text-preset-2 text-center text-neutral-100">
              Ready to debug your reading list?
            </p>
            <div className="flex flex-col items-center justify-start gap-6">
              <ButtonWithArrowUp text="REVIEW MEMBERSHIP OPTIONS" />
              <TestimonialTotal theme="dark" />
            </div>
          </div>
          <div className="footer-copyright flex flex-col items-center justify-between gap-4 border-t border-neutral-700 py-6 not-lg:px-8 md:flex-row md:items-stretch">
            <span className="text-preset-7 text-white">
              © 2024 - Tech Book Club
            </span>
            <div className="flex flex-row items-stretch justify-center gap-6 text-white">
              <IconBluesky />
              <IconLinkedIn />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBase;
