import { useState } from "react";
import UtilsValidationEmail from "../utils/UtilsValidationEmail";

export default function CardRegister() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  function handleChange(value: string) {
    const result = UtilsValidationEmail(value);
    const isValid = result.isValid;

    setError(!isValid);
    setMessage(result.error);
  }

  return (
    <article aria-label="Card Register">
      <div className="mx-auto max-w-84 md:max-w-120 lg:max-w-4xl">
        <div className="bg-navy-850 rounded-[9px] px-6 py-10 drop-shadow-[5px_5px_8px_rgba(0,0,0,25.43%)] md:px-10 md:py-12 lg:px-20">
          <div className="flex flex-col items-center justify-center gap-8 lg:items-start">
            <div className="card-content space-y-6 text-center text-white lg:space-y-2 lg:px-6">
              <h2 className="font-raleway lg:text-4.5xl leading-120% tracking-0px text-xl font-bold">
                Get early access today
              </h2>
              <p className="text-preset-8">
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
            </div>
            <div className="card-email-register w-full space-y-2 space-x-6 text-center">
              <form>
                <div className="form-wrapper flex flex-col items-start justify-center gap-4 not-md:gap-6 lg:flex-row">
                  <div className="input-email w-full">
                    <input
                      type="email"
                      name="input-email"
                      id="input-user-email"
                      placeholder="email@example.com"
                      className="text-navy-950 w-full rounded-3xl bg-white px-8 py-3 placeholder:text-gray-400"
                      onBlur={(e) => handleChange(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className={`w-full rounded-3xl px-6 py-3 transition-all delay-75 ease-linear lg:max-w-50 ${error ? "bg-blue-250 cursor-no-drop" : "gradient-1 cursor-pointer"}`}
                    disabled={error}
                  >
                    <span className="text-preset-4 text-white">
                      Get Started For Free
                    </span>
                  </button>
                </div>
                <span
                  className={`text-preset-9-bold inline-block w-full px-8 text-center text-red-500 transition-opacity delay-75 ease-linear md:text-start ${error ? "opacity-100" : "opacity-0"}`}
                >
                  {message}
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
