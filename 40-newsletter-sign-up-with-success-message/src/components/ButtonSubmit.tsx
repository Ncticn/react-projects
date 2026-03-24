"use client"

interface ButtonSubmitProps {
    text: string;
    btnDisabled: boolean;
}

export default function ButtonSubmit({ text, btnDisabled = false }: ButtonSubmitProps) {
    return (
        <button type="submit" className={`text-preset-2 w-full font-bold text-white bg-linear-to-r bg-blue-800 rounded-lg px-8 py-4 transition delay-75 ease-linear ${btnDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100 hover:drop-shadow-[0_16px_32px_rgba(255,97,85,50%)] hover:from-0% hover:from-[#FF6A3A] hover:to-100% hover:to-[#FF527B]"}`} disabled={btnDisabled}>{text}</button>
    );
}