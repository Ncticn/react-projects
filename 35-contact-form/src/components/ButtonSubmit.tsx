interface ButtonSubmit {
  text: string;
  class?: string;
  disabled: boolean;
}

export default function ButtonSubmit(props: ButtonSubmit) {
  return (
    <button
      type="submit"
      className={`text-body-md z-10 inline-block w-full overflow-hidden rounded-lg bg-green-600 px-10 py-4 font-bold text-white transition-all delay-75 ease-linear ${props.class ? props.class : "cursor-pointer opacity-100 hover:bg-[#063F34]"}`}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
