interface InputRadioProps {
  id: string;
  name: string;
  label: string;
  value: string;
  selected: string;
  setSelected: (value: string) => void;
}

export default function InputRadio({
  id,
  name,
  label,
  value,
  selected,
  setSelected,
}: InputRadioProps) {
  const isChecked = selected === value;
  return (
    <div className="form-item">
      <label
        htmlFor={id}
        className="group flex cursor-pointer flex-row items-center justify-start gap-4"
      >
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          checked={isChecked}
          onChange={() => setSelected(value)}
          className="sr-only"
        />
        <div
          className={`inline-flex size-7.75 items-center justify-center rounded-full border transition delay-150 ease-linear ${isChecked ? "border-blue-100 bg-blue-100" : "border-grey-500 bg-white group-hover:border-blue-500"} `}
        >
          {isChecked && (
            <span className="inline-block size-3.75 rounded-full border-none bg-blue-500"></span>
          )}
        </div>
        <span className="text-preset-6 font-semibold text-blue-900">
          {label}
        </span>
      </label>
    </div>
  );
}
