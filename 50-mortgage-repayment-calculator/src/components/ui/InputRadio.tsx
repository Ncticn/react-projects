"use client";

interface InputRadioProps {
    inputId: string;
    inputName: string;
    text: string;
    value: string;
    selected: string;
    setSelected: (value: string) => void;
}

export default function InputRadio({
    inputId,
    inputName,
    text,
    value,
    selected,
    setSelected
}: InputRadioProps) {

    const isChecked = selected === value;

    return (
        <div className="form-item">
            <input type="radio" name={inputName} id={inputId} value={value} checked={isChecked} onChange={() => setSelected(value)} className="sr-only" />

            <label className={`w-full rounded-sm border-2  px-4 py-3 flex flex-row gap-4 cursor-pointer hover:border-lime transition delay-150 ease-linear ${isChecked ? "bg-lime/15 border-lime" : "bg-transparent border-slate-500"}`} htmlFor={inputId}>
                <div className={`size-6 overflow-hidden rounded-full border-2 transition delay-150 ease-linear p-0.75 flex items-center justify-center ${isChecked ? "border-lime" : "border-slate-700"}`}>
                    {isChecked && <span className="w-full h-full inline-block rounded-full bg-lime"></span>}
                </div>
                <span className="text-preset-3 inline-block text-slate-900">
                    {text}
                </span>
            </label>
        </div>
    );
}