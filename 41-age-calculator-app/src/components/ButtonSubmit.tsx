import Image from "next/image";
import IconDown from "@/assets/icons/icon-arrow.svg";

export default function ButtonSubmit() {
  return (
    <button
      type="submit"
      className="flex size-24 cursor-pointer items-center justify-center gap-2 rounded-full bg-purple-500 transition delay-75 ease-linear hover:bg-black"
    >
      <Image src={IconDown} alt="Icon Arrow Down" width={44} height={44} />
    </button>
  );
}
