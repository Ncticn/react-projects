import ButtonLink from "./ButtonLink";

type CardFeatureProps = {
  title: string;
  description: string;
  iconUrl: string;
};

function CardFeature({ title, description, iconUrl }: CardFeatureProps) {
  return (
    <div className="card-feature">
      <div className="w-full flex items-stretch justify-start md:max-w-82 lg:max-w-88 h-full md:min-h-80.5 bg-white px-8 pt-16 pb-10 rounded-[15px] drop-shadow-[0_25px_50px_rgba(6,22,141,4.42%)] relative">
        <div className="card-feature-icon absolute -top-6 mb-8">
          <div className="size-14 inline-block ">
            <img
              src={iconUrl}
              alt="Feature Icon"
              className="object-contain w-full h-auto"
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
