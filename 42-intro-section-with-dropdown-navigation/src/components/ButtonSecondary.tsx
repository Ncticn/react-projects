interface ButtonSecondaryProps {
  text: string;
}

function ButtonSecondary({ text }: ButtonSecondaryProps) {
  return (
    <button
      type="button"
      className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-[14px] border-[1.5px] border-gray-500 bg-white px-6.25 py-3 text-gray-500 transition delay-75 ease-linear hover:border-gray-950 hover:bg-white hover:text-gray-950"
    >
      <span className="text-preset-6">{text}</span>
    </button>
  );
}

export default ButtonSecondary;
