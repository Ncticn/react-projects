import IconDown from "../assets/icons/icon-arrow.svg"

export default function ButtonSubmit() {
  return (
    <button
      type="submit"
      className="z-20 flex size-16 cursor-pointer items-center justify-center gap-2 rounded-full bg-purple-500 transition delay-75 ease-linear hover:bg-black md:size-24"
    >
      <img
        src={IconDown.src}
        alt="Icon Arrow Down"
        className="size-6 md:size-11"
      />
    </button>
  );
}
