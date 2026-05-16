// Props
interface ButtonSubmitProps {
  text: string;
}

export default function ButtonSubmit({ text }: ButtonSubmitProps) {
  return (
    <button
      type="submit"
      className="text-base-white border-base-green hover:text-base-green cursor-pointer border-b-2 pb-2.5 text-base leading-6.5 font-bold tracking-[2.29px] uppercase transition delay-150 ease-linear"
    >
      {text}
    </button>
  );
}
