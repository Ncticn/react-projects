import { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";
import InputEmail from "./InputEmail";

export default function FormSignUp() {

    const [status, setStatus] = useState("empty");
    const [email, setEmail] = useState("");

    function handleOnChange(value: string, valid: boolean) {
        if (value.length > 0) {
            setStatus("typing");
            if (valid) {
                setEmail(value);
            } else {
                setStatus("error");
            }

        } else {
            setStatus("empty");
        }

    }

    function handleSubmit(e: any) {
        e.preventDefault();
        setStatus("success");
    }

    return (
        <form onSubmit={handleSubmit}
            className="space-y-6 md:space-y-4 lg:space-y-6 w-full not-md:pb-11 not-md:pt-10 bg-white">
            <InputEmail inputID="input-email" inputLabel="Email address" inputName="input-singup-email" placeholder="email@company.com" onChange={handleOnChange} />
            <ButtonSubmit text="Subscribe to monthly newsletter" disabled={status === "empty"} />
        </form>
    );
}
