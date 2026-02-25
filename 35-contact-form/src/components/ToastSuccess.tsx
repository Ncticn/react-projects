import { useEffect, useState } from "react";

export default function ToastSuccess() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      setVisible(true);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="toast-success absolute inset-x-0 top-0 z-10 p-6">
      <div className="mx-auto md:max-w-112.5">
        <div className="bg-grey-900 w-full rounded-xl p-6">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex flex-row items-center justify-start gap-2">
              <img
                src="/icons/icon-success-check.svg"
                alt="Icon Success Check"
                className="size-6 object-contain"
              />
              <h4 className="text-body-md font-bold text-white">
                Message Sent!
              </h4>
            </div>
            <p className="text-body-sm text-green-200">
              Thanks for completing the form. We’ll be in touch soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
