type CardTestimonialProps = {
  title: string;
  description: string;
  author: {
    name: string;
    imgUrl: string;
  };
  clientQueue: string;
};

export default function CardTestimonial({
  title,
  description,
  author,
  clientQueue,
}: CardTestimonialProps) {
  let cardStyles;

  switch (clientQueue) {
    case "1":
      cardStyles = {
        backgroundColor: "bg-purple-500",
        authorNameColor: "text-white",
        verifiedColor: "text-purple-50",
        titleColor: "text-white",
        descriptionColor: "text-purple-50",
        borderColor: "border-2 border-purple-300",
      };
      break;
    case "2":
      cardStyles = {
        backgroundColor: "bg-grey-500",
        authorNameColor: "text-white",
        verifiedColor: "text-grey-100",
        titleColor: "text-white",
        descriptionColor: "text-grey-100",
      };
      break;
    case "3":
      cardStyles = {
        backgroundColor: "bg-white",
        authorNameColor: "text-grey-500",
        verifiedColor: "text-grey-400",
        titleColor: "text-grey-500",
        descriptionColor: "text-grey-400",
      };
      break;
    case "4":
      cardStyles = {
        backgroundColor: "bg-white",
        authorNameColor: "text-grey-500",
        verifiedColor: "text-grey-400",
        titleColor: "text-grey-500",
        descriptionColor: "text-grey-400",
      };
      break;
    case "5":
      cardStyles = {
        backgroundColor: "bg-dark-blue",
        authorNameColor: "text-white",
        verifiedColor: "text-white",
        titleColor: "text-grey-200",
        descriptionColor: "text-grey-100",
        borderColor: "border-2 border-purple-300",
      };
      break;
  }

  return (
    <article className="card-testimonials card-testimonials-shadow relative">
      <div
        className={`h-full rounded-lg p-8 ${clientQueue === "1" ? "after:absolute after:top-0 after:right-15 after:z-10 after:size-26 after:bg-[url(../patterns/bg-pattern-quotation.svg)] after:bg-contain after:bg-center after:bg-no-repeat" : ""} ${cardStyles?.backgroundColor} `}
      >
        <div className="relative z-20 flex flex-col items-start justify-center gap-4">
          <div className="card-testimonial-profile flex items-center justify-start gap-4">
            <div
              className={`size-7 overflow-hidden rounded-full ${cardStyles?.borderColor}`}
            >
              <img
                src={author.imgUrl}
                alt=""
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="space-y-1 text-start">
              <h5 className={`text-preset-2 ${cardStyles?.authorNameColor}`}>
                {author.name}
              </h5>
              <p className={`text-preset-4 ${cardStyles?.verifiedColor} `}>
                Verified Graduate
              </p>
            </div>
          </div>
          <h3 className={`text-preset-1 ${cardStyles?.titleColor} `}>
            {title}
          </h3>
          <p className={`text-preset-3 ${cardStyles?.descriptionColor} `}>
            “ {description} “
          </p>
        </div>
      </div>
    </article>
  );
}
