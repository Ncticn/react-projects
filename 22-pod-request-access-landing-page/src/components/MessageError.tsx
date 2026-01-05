import type { ReactNode } from "react";

type MessageErrorProps = {
  message: ReactNode;
  className?: string;
};
function MessageError({ message, className }: MessageErrorProps) {
  return (
    <span
      className={`${className} text-preset-3 text-red-base mt-2 md:ps-8 block md:inline-block text-center`}
    >
      {message}
    </span>
  );
}
export default MessageError;
