
// Props
interface InputEmailProps {
    name: string,
    id: string,
    placeholder: string,
    error: boolean,
    success: boolean,
    value: string,
    onChange?: (value: string) => void,
}

export default function InputEmail({ id, name, placeholder, error, success, value, onChange }: InputEmailProps) {

    return (
        <div className="form-item-input flex flex-col items-end justify-center gap-0 relative overflow-hidden">
            <input
                type="email"
                name={name}
                id={id}
                placeholder={placeholder}
                className={`placeholder:uppercase placeholder:text-base-white/50 pb-4 border-b border-base-white w-full outline-0 px-6 text-base-white font-medium text-base leading-6.5 tracking-[-0.22px] ${error && "border-b-[#FF6F5B]"} ${success && "border-b-base-green"}`}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            />
            {
                error && <span className="text-[#FF6F5B] absolute bottom-9.5 right-0 size-6">
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
                        className="lucide lucide-circle-alert-icon lucide-circle-alert">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" x2="12" y1="8" y2="12" />
                        <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                </span>
            }
            {
                error && <span className="text-[#FF6F5B] text-xs leading-4 font-medium tracking-[-0.17px] pt-1.25">Sorry, invalid format here</span>
            }
        </div>
    );
}