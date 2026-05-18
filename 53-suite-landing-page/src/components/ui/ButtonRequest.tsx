interface ButtonRequestProps {
    text: string
}

export default function ButtonRequest({ text }: ButtonRequestProps) {
    return (
        <button type="button" className="cursor-pointer transition-all delay-150 ease-linear focus:outline-4 focus:outline-offset-4 focus:outline-neutral-900 m-4 text-neutral-900 text-preset-6 bg-white px-6 pt-4 pb-3 border border-neutral-900 rounded-md hover:bg-neutral-900 hover:text-neutral-0">
            {text}
        </button>
    );
}