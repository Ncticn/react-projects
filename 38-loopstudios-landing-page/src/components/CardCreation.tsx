interface CardCreationProps {
  cardTitle: string;
  cardImageUrl: string;
}

export default function CardCreation({
  cardTitle,
  cardImageUrl,
}: CardCreationProps) {
  return (
    <article className="card-creation">
      <div className="h-30 w-full lg:h-112.5 lg:w-3xs">
        <div className="group bg-grey-200 relative h-full w-full after:absolute after:inset-0 after:bg-linear-to-l after:from-black/0 after:from-0% after:to-black/60 after:to-100% after:bg-blend-multiply after:transition-all after:delay-75 after:ease-linear hover:after:bg-white hover:after:opacity-75 lg:after:bg-linear-to-b">
          <picture>
            <source
              srcSet={`src/assets/images/desktop/${cardImageUrl}`}
              media="(width > 768px)"
            />
            <source
              srcSet={`src/assets/images/mobile/${cardImageUrl}`}
              media="(width > 0)"
            />
            <img
              src={`src/assets/images/desktop/${cardImageUrl}`}
              alt={cardTitle}
              className="h-full w-full object-cover object-top"
            />
          </picture>

          <h3 className="text-preset-4 absolute bottom-5 left-5 z-20 w-max max-w-32 text-white uppercase transition-colors delay-75 ease-linear group-hover:text-black md:left-9 lg:bottom-8 lg:left-10 lg:max-w-44">
            {cardTitle}
          </h3>
        </div>
      </div>
    </article>
  );
}
