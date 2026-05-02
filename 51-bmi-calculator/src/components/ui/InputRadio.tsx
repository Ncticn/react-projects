interface InputRadioProps {
    id: string;
    name: string;
    label: string;
    value: string;
    selected: string;
    setSelected: (value: string) => void;
}

export default function InputRadio({ id, name, label, value, selected, setSelected }: InputRadioProps) {
    const isChecked = selected === value;
    return (
        <div className="form-item">
            <label htmlFor={id} className="flex flex-row items-center justify-start gap-4 cursor-pointer group">
                <input
                    type="radio"
                    name={name}
                    id={id}
                    value={value}
                    checked={isChecked}
                    onChange={() => setSelected(value)}
                    className="sr-only"
                />
                <div className={`
                    inline-flex items-center justify-center size-7.75 border rounded-full transition delay-150 ease-linear ${isChecked ? "bg-blue-100 border-blue-100" : "bg-white border-grey-500 group-hover:border-blue-500"}
                    `}>
                    {
                        isChecked && <span className="inline-block size-3.75 bg-blue-500 rounded-full border-none"></span>
                    }
                </div>
                <span className="text-preset-6 font-semibold text-blue-900">
                    {label}
                </span>
            </label>
        </div>
    );
}