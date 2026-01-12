import IconAndroid from "./IconAndroid";
import IconIOS from "./IconIOS";

type ButtonBaseProps = {
  type: "dark" | "light";
  className?: string;
  ariaLabel: string;
  icon: "ios" | "android";
};

export default function ButtonBase({
  type = "dark",
  className,
  ariaLabel,
  icon,
}: ButtonBaseProps) {
  let customClass = "";
  if (type === "dark") {
    customClass =
      "bg-slate-base text-white-base hover:bg-cyan-base hover:text-slate-base";
  } else if (type === "light") {
    customClass = "bg-white-base text-slate-base hover:bg-yellow-base";
  }
  return (
    <a
      href="#"
      className={`inline-flex w-full flex-row items-center justify-center gap-2 rounded-xl px-8 py-4 transition-all delay-150 ease-linear ${customClass} ${className ? className : ""}`}
      aria-label={ariaLabel}
    >
      {icon === "android" ? <IconAndroid /> : <IconIOS />}
      <span className="text-preset-6 text-current">
        {icon === "android" ? "Android" : "iOS"} Download
      </span>
    </a>
  );
}
