import type { ReactNode } from "react";
import IconStar from "./IconStar";

function SectionTestimonial() {
  const starList: ReactNode[] = [];
  for (let icon = 0; icon < 5; icon++) {
    starList.push(<IconStar key={icon} />);
  }
  return (
    <section>
      <div className="px-4 md:px-8 lg:px-0">
        <div className="mx-auto max-w-full lg:max-w-242.5">
          <div className="flex flex-col items-start justify-center gap-8 lg:items-center">
            <div className="testimonial-rating flex flex-row gap-1.5">
              {starList}
            </div>
            <div className="textimonial-content space-y-8 text-start lg:text-center">
              <p className="text-preset-3 text-neutral-900">
                "This book club transformed my technical reading from a solitary
                activity into an enriching community experience. The discussions
                are gold!"
              </p>
              <span className="text-preset-5 block text-neutral-700">
                Sarah Chen, Software Architect
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTestimonial;
