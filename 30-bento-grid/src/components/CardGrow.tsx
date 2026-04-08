import IllustrationGrowFollowers from "../assets/images/illustration-grow-followers.webp";

function CardGrow() {
  return (
    <div className="h-full w-full rounded-[10px] bg-purple-500 px-6 py-6">
      <div className="flex h-full flex-col items-center justify-center gap-10 md:flex-row lg:justify-between lg:gap-0">
        <img
          src={IllustrationGrowFollowers}
          alt="Image Illustration Grow Followers"
          className="max-w-56 object-contain"
        />
        <h2 className="text-preset-2 mx-auto max-w-60 text-center text-white md:max-w-full md:text-start">
          Grow followers with non-stop content.
        </h2>
      </div>
    </div>
  );
}

export default CardGrow;
