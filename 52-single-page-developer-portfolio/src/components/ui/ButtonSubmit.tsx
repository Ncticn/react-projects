
// Props
interface ButtonSubmitProps {
    text: string
}

export default function ButtonSubmit({ text }: ButtonSubmitProps) {
    return (
        <button type="submit" className="text-base font-bold leading-6.5 tracking-[2.29px] text-base-white uppercase border-b-2 border-base-green pb-2.5 transition delay-150 ease-linear hover:text-base-green cursor-pointer">
            {text}
        </button>
    );
}