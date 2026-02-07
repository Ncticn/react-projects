interface CardArticleProps {
  count: string;
  title: string;
  description: string;
  imgUrl: string;
}

export default function CardArticle(props: CardArticleProps) {
  return (
    <article className="inline-block">
      <a
        href="/"
        className="group flex flex-row items-center justify-start gap-6"
      >
        <figure className="max-w-25">
          <img
            src={props.imgUrl}
            alt="Image Retro PCS"
            className="h-auto w-full object-contain"
          />
        </figure>
        <div className="flex flex-col items-stretch justify-start gap-2">
          <span className="text-preset-3 text-red-500">{props.count}</span>
          <h3 className="text-preset-5 text-navy-950 transition-colors delay-75 ease-linear group-hover:text-red-500">
            {props.title}
          </h3>
          <p className="text-preset-6 text-navy-600">{props.description}</p>
        </div>
      </a>
    </article>
  );
}
