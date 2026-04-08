import IllustrationAudienceGrowth from "../assets/images/illustration-audience-growth.webp";

function CardFaster() {
  return (
    <div className="h-full w-full rounded-[10px] bg-white px-6 py-6">
      <div className="flex h-full flex-col items-start justify-between gap-6 md:gap-0 not-lg:md:flex-row not-lg:md:items-center">
        <div className="space-y-3.75">
          <h2 className="text-preset-1 text-black">{">"}56%</h2>
          <p className="text-preset-4 text-black">faster audience growth</p>
        </div>

        <div className="max-w-45">
          <img
            src={IllustrationAudienceGrowth}
            alt="Image Illustration Audience Growth"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default CardFaster;
