interface TestimonialTotalProps {
  theme: "dark" | "light";
}

function TestimonialTotal({ theme }: TestimonialTotalProps) {
  return (
    <div className="testimonial-total inline-block">
      <div className="flew-row flex items-center justify-start gap-3">
        <div className="testimonial-image max-w-28">
          <img
            src="src/assets/images/image-avatars.webp"
            alt="Avatars Images"
          />
        </div>
        <div className="testimonial-rating flex flex-col items-start justify-start gap-1">
          <div className="icon-wrapper h-6 w-30 bg-[url(src/assets/icons/icon-star.svg)] bg-contain bg-left"></div>
          <span
            className={`text-preset-7 ${theme === "dark" ? "text-white" : "text-neutral-700"}`}
          >
            200+ developers joined already
          </span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialTotal;
