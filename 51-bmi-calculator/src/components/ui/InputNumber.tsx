interface InputNumberProps {
    id: string;
    name: string;
    label?: string;
    suffix: string;
    value: string;
    placeholder?: string;
    onChange: (e: string) => void;
}

export default function InputNumber({ id, name, label, suffix, placeholder, value, onChange }: InputNumberProps) {

    const handleOnChange = (value: string) => {
        onChange(value);
    }

    return (
        <div className="flex flex-col items-start justify-start gap-2">
            <label htmlFor={id} className="text-preset-7 font-normal text-grey-500">{label}</label>
            <div className="border-2 border-grey-500 hover:border-blue-500 py-4 px-6 rounded-xl flex flex-row items-stretch justify-start gap-6">
                <input
                    type="number"
                    name={name}
                    id={id}
                    className="text-preset-4 placeholder:text-grey-500 text-blue-900 w-full h-full outline-0"
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => handleOnChange(e.target.value)}
                />

                <span className="text-preset-4 text-blue-500">
                    {suffix}
                </span>
            </div>
        </div>
    );
}