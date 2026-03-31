interface ButtonPrimaryProps {
  text: string;
}

function ButtonPrimary({ text }: ButtonPrimaryProps) {
  return (
    <button
      type="button"
      className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-[15px] border-[1.5px] border-gray-950 bg-gray-950 px-8.25 py-3.25 text-gray-50 transition delay-75 ease-linear hover:border-gray-950 hover:bg-white hover:text-gray-950"
    >
      <span className="text-preset-4 -tracking-0.25px font-bold">{text}</span>
    </button>
  );
}

export default ButtonPrimary;
