interface CardTestimonialProps {
  imgUrl: string;
  comment: string;
  author: {
    title: string;
    name: string;
  };
}

function CardTestimonial(props: CardTestimonialProps) {
  return (
    <article aria-label="Testimonial Card">
      <div className="flex flex-col items-center justify-start gap-8 lg:gap-18">
        <div className="card-testimonial-content flex flex-col items-center justify-start gap-14.5">
          <figure className="size-18 overflow-hidden rounded-full">
            <img
              src={props.imgUrl}
              alt="Author Avatar Image"
              className="object-contain"
            />
          </figure>
          <p className="text-preset-10 text-grey-600 text-center">
            {props.comment}
          </p>
        </div>
        <div className="card-testimonial-author flex flex-col items-center justify-center gap-2">
          <span className="text-preset-7 text-grey-950">
            {props.author.name}
          </span>
          <span className="text-preset-12 text-grey-400">
            {props.author.title}
          </span>
        </div>
      </div>
    </article>
  );
}

export default CardTestimonial;
