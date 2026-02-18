interface CardTestimonialProps {
  id: string;
  comment: string;
  author: {
    fullName: string;
    job: string;
    avatarUrl: string;
  };
}

export default function CardTestimonial(props: CardTestimonialProps) {
  return (
    <article aria-label="Card Testimonial">
      <div
        className={`bg-navy-800 relative rounded-sm px-6 py-8 ${props.id === "1" ? "before:absolute before:-top-12 before:-left-6 before:size-20 before:bg-[url(src/assets/images/bg-quotes.png)] before:bg-auto before:bg-center before:bg-no-repeat" : ""}`}
      >
        <div className="flex flex-col items-start justify-start gap-6">
          <p className="text-preset-8 text-white">{props.comment}</p>

          <div className="card-testimonial-author">
            <div className="flex flex-row gap-2">
              <div className="author-avatar">
                <div className="size-6 overflow-hidden rounded-full">
                  <img
                    src={props.author.avatarUrl}
                    alt="Author Avatar Picture"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="author-info">
                <div className="flex flex-col">
                  <span className="text-preset-9-bold text-white">
                    {props.author.fullName}
                  </span>
                  <span className="text-preset-10 text-white">
                    {props.author.job}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
