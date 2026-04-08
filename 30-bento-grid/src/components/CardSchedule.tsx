import IllustrationSchedulePosts from "../assets/images/illustration-schedule-posts.webp";

function CardSchedule() {
  return (
    <div className="h-full w-full rounded-[10px] bg-purple-100">
      <div className="mx-auto flex flex-col items-center justify-center gap-6 md:max-w-106 md:justify-start">
        <h3 className="text-preset-3 px-8 pt-8 text-black">
          Schedule to social media.
        </h3>
        <div className="relative w-full overflow-hidden px-4 md:px-0 lg:h-80 lg:ps-8">
          <img
            src={IllustrationSchedulePosts}
            alt="Image Illustration Schedule Posts"
            className="h-full object-cover object-left"
          />
        </div>
        <p className="text-preset-4 px-8 pb-8 text-center text-black lg:text-start">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </div>
    </div>
  );
}

export default CardSchedule;
