import ButtonLink from "./ButtonLink";

type CardFeatureProps = {
  title: string;
  description: string;
  iconUrl: string;
};

function CardFeature({ title, description, iconUrl }: CardFeatureProps) {
  return (
    <div className="card-feature">
      <div className="relative flex h-full w-full items-stretch justify-start rounded-[15px] bg-white px-8 pt-16 pb-10 drop-shadow-[0_25px_50px_rgba(6,22,141,4.42%)] md:min-h-80.5 md:max-w-82 lg:max-w-88">
        <div className="card-feature-icon absolute -top-6 mb-8">
          <div className="inline-block size-14">
            <img
              src={iconUrl}
              alt="Feature Icon"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-y-6">
          <div className="space-y-6">
            <h3 className="text-preset-4 text-blue-900">{title}</h3>
            <p className="text-preset-5 text-grey">{description}</p>
          </div>
          <ButtonLink content="Get Started" />
        </div>
      </div>
    </div>
  );
}

export default CardFeature;
