"use client";

interface InputTextProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (e: string) => void;
    addon: string;
    addonPosition: "prefix" | "suffix";
    error?: string;

}

export default function InputText({
    id,
    name,
    label,
    value,
    onChange,
    addon,
    addonPosition,
    error
}: InputTextProps) {

    const handleOnChange = (value: string) => {
        onChange(value);
    }

    return (
        <div className="flex flex-col items-stretch justify-center gap-3">

            <label htmlFor={id} className="text-preset-4 text-slate-700">{label}</label>
            <div className={`flex items-stretch *:h-full justify-start gap-0 border-2 group focus-within:border-lime transition delay-150 ease-linear hover:border-slate-900 rounded-sm overflow-hidden relative ${error ? "border-red" : "border-slate-500"} ${addonPosition === "prefix" ? "flex-row" : "flex-row-reverse"}`}>

                <div
                    className={`px-4 py-3 text-center cursor-pointer text-preset-3 transition delay-150 ease-linear group-focus-within:bg-lime group-focus-within:text-slate-900 ${error ? "bg-red text-white" : "bg-slate-100 text-slate-700"}`}
                >
                    {addon}
                </div>

                <input type="text" id={id} name={name} className="px-4 py-3 text-preset-3 text-slate-900 outline-0 w-full" value={value} onChange={(e) => handleOnChange(e.target.value)} />
            </div>
            {error && <span className="text-preset-5 text-red">{error}</span>}
        </div>
    );
}