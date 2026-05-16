// Props
interface InputEmailProps {
  name: string;
  id: string;
  placeholder: string;
  error: boolean;
  success: boolean;
  value: string;
  onChange?: (value: string) => void;
}

export default function InputEmail({
  id,
  name,
  placeholder,
  error,
  success,
  value,
  onChange,
}: InputEmailProps) {
  return (
    <div className="form-item-input relative flex flex-col items-end justify-center gap-0 overflow-hidden">
      <input
        type="email"
        name={name}
        id={id}
        placeholder={placeholder}
        className={`placeholder:text-base-white/50 border-base-white text-base-white w-full border-b px-6 pb-4 text-base leading-6.5 font-medium tracking-[-0.22px] outline-0 placeholder:uppercase ${error && "border-b-[#FF6F5B]"} ${success && "border-b-base-green"}`}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {error && (
        <span className="absolute right-0 bottom-9.5 size-6 text-[#FF6F5B]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-alert-icon lucide-circle-alert"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
          </svg>
        </span>
      )}
      {error && (
        <span className="pt-1.25 text-xs leading-4 font-medium tracking-[-0.17px] text-[#FF6F5B]">
          Sorry, invalid format here
        </span>
      )}
    </div>
  );
}
