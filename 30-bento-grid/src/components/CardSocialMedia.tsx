import IllustrationFiveStars from "../assets/images/illustration-five-stars.webp";

function CardSocialMedia() {
  return (
    <div className="h-full w-full rounded-[10px] bg-purple-500 px-8 py-10 md:min-h-81 md:py-8">
      <div className="flex h-full flex-col items-center justify-center gap-6 px-4 text-center md:px-0">
        <h1 className="text-preset-1 text-white">
          Social Media <b className="text-yellow-500">10x</b> Faster with AI
        </h1>

        <div className="max-w-56 space-y-2">
          <img
            src={IllustrationFiveStars}
            alt="Image Illustration Five Stars"
            className="mx-auto max-w-48 object-contain"
          />
          <p className="text-preset-4 text-white">Over 4,000 5-star reviews</p>
        </div>
      </div>
    </div>
  );
}

export default CardSocialMedia;
