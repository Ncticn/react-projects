import IllustrationMultiplePlatforms from "../assets/images/illustration-multiple-platforms.webp";

function CardManage() {
  return (
    <div className="h-full w-full overflow-hidden rounded-[10px] bg-white">
      <div className="flex h-full flex-col items-start justify-start gap-4 md:justify-between md:gap-0">
        <div className="relative top-6 left-6">
          <img
            src={IllustrationMultiplePlatforms}
            alt="Image Illustration Multiple Platforms"
            className="object-contain"
          />
        </div>
        <div className="max-w-full px-4 py-4 md:max-w-60 md:px-6 md:py-6">
          <h3 className="text-preset-3 text-black">
            Manage multiple accounts and platforms.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CardManage;
