interface ButtonBaseProps {
  text: string;
  type: "primary" | "secondary";
}

export default function ButtonBase(props: ButtonBaseProps) {
  return (
    <button
      type="button"
      className={`inline-flex w-full cursor-pointer items-center justify-center rounded-[28px] px-6.25 py-3.25 inset-shadow-[0_-3px_0_0_rgba(0,0,0,0.15)] transition-all delay-75 ease-linear md:w-fit ${props.type === "primary" ? "bg-green-500 shadow-green-500 hover:bg-green-300 hover:shadow-green-300" : "bg-blue-500 shadow-blue-500 hover:bg-blue-400 hover:shadow-blue-400"} `}
    >
      <span className="text-preset-7-semibold text-white">{props.text}</span>
    </button>
  );
}
