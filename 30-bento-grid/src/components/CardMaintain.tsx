import IllustrationConsistentSchedule from "../assets/images/illustration-consistent-schedule.webp";

function CardMaintain() {
  return (
    <div className="h-full w-full rounded-[10px] bg-yellow-500">
      <div className="flex h-full flex-col items-start justify-start gap-4">
        <div className="px-4 pt-4 md:px-6 md:pt-6">
          <h3 className="text-preset-3 text-black">
            Maintain a consistent posting schedule.
          </h3>
        </div>

        <div className="relative left-6 h-34 w-full max-w-52 overflow-hidden md:h-39 lg:h-25">
          <img
            src={IllustrationConsistentSchedule}
            alt="Image Illustration Consistent Schedule"
            className="absolute object-contain px-0"
          />
        </div>
      </div>
    </div>
  );
}

export default CardMaintain;
