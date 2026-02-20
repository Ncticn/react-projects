interface ButtonSubmit {
  text: string;
}

export default function ButtonSubmit(props: ButtonSubmit) {
  return (
    <button
      type="submit"
      className="text-body-md z-10 inline-block w-full cursor-pointer overflow-hidden rounded-lg bg-green-600 px-10 py-4 font-bold text-white transition-colors delay-75 ease-linear hover:bg-[#063F34]"
    >
      {props.text}
    </button>
  );
}
