function CardStorage() {
  return (
    <article className="relative w-full max-w-135">
      <div className="bg-blue-850 rounded-[10px] px-9 py-10">
        <div className="flex flex-col items-center justify-center gap-2 md:items-start">
          <p className="text-preset-2 text-blue-200">
            You’ve used <b className="text-white">815 GB</b> of your storage
          </p>
          <div className="flex h-5 w-full items-center rounded-[10px] bg-blue-900 p-1">
            <div className="bg-gradient-primary relative h-3.5 w-full max-w-3/4 rounded-lg after:absolute after:top-1/8 after:right-1 after:size-2.5 after:rounded-full after:bg-white"></div>
          </div>
          <div className="flex w-full flex-row items-stretch justify-between">
            <span className="text-preset-3-extrabold text-blue-200">0 GB</span>
            <span className="text-preset-3-extrabold text-blue-200">
              100 GB
            </span>
          </div>
        </div>
        <div className="after:arrow absolute right-1/4 inline-flex flex-row items-center justify-center gap-2 rounded-[10px] bg-white px-4 py-4 text-blue-950 md:right-1/3 lg:-top-10 lg:right-9 lg:rounded-br-none">
          <div className="arrow absolute -right-px -bottom-4.5 hidden size-6 bg-white lg:inline-block"></div>
          <span className="text-preset-1">185</span>
          <span className="text-preset-3-bold opacity-50">GB LEFT</span>
        </div>
      </div>
    </article>
  );
}

export default CardStorage;
