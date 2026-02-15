interface ButtonBaseProps {
  text: string;
  type: "primary" | "secondary";
}

export default function ButtonBase(props: ButtonBaseProps) {
  return (
    <button
      type="button"
      className={`inline-flex cursor-pointer items-center justify-center rounded-[28px] px-6.25 py-3.25 inset-shadow-[0_-3px_0_0_rgba(0,0,0,0.15)] transition-all delay-75 ease-linear ${props.type === "primary" ? "bg-green-500 shadow-green-500 hover:bg-green-300 hover:shadow-green-300" : "bg-blue-500 shadow-blue-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.10)] hover:bg-blue-400 hover:shadow-blue-400"} `}
    >
      <span className="text-preset-7-semibold text-white">{props.text}</span>
    </button>
  );
}
