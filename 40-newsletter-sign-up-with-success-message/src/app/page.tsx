"use client"

import { useState } from "react";
import Image from "next/image";

import ButtonSubmit from "@/components/ButtonSubmit";
import InputEmail from "@/components/InputEmail";
import ModalSuccess from "@/components/ModalSuccess";

export default function Page() {

  const featureList = [
    {
      id: 1,
      description: "Product discovery and building what matters",
    },
    {
      id: 2,
      description: "Measuring to ensure updates are a success",
    },
    {
      id: 3,
      description: "And much more!",
    },
  ];

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

  function handleClose(){
    setStatus("empty");
    setEmail("");
  }

  if (status === "success") {
    return (<ModalSuccess email={email} onClose={() => handleClose()} />)
  }

  return (
    <>
      <section className="h-full flex items-center lg:items-center justify-center">
        <article className="w-fit h-full md:h-fit">
          <div className="bg-white px-0 py-0 md:px-10 md:py-10 lg:px-8 lg:py-6 md:rounded-[36px] drop-shadow-[0_15px_60px_rgba(0,0,0,25%)]">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-start gap-10 lg:gap-16">
              <div className="article-content flex flex-col items-start justify-start gap-6 lg:gap-8 w-full lg:w-fit not-md:px-6">
                <h1 className="text-blue-800 text-preset-1">Stay updated!</h1>
                <p className="text-blue-800 text-preset-2 font-normal w-[90%]">Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className="w-full space-y-2">

                  {
                    featureList.map((feature) => (
                      <li className="flex flex-row items-center justify-start gap-4" key={feature.id}>
                        <Image src="assets/icons/icon-list.svg" width={21} height={21} alt="Icon List Success" />
                        <p className="text-preset-2 text-blue-800 font-normal">{feature.description}</p>
                      </li>
                    ))
                  }
                </ul>
                <form onSubmit={handleSubmit}
                  className="space-y-6 md:space-y-4 lg:space-y-6 w-full not-md:pb-11 not-md:pt-10 bg-white">
                  <InputEmail inputID="input-email" inputLabel="Email address" inputName="input-singup-email" placeholder="email@company.com" onChange={handleOnChange} />
                  <ButtonSubmit text="Subscribe to monthly newsletter" btnDisabled={status === "empty"} />
                </form>
              </div>
              <div className="article-image">
                <picture>
                  <source srcSet="/assets/images/illustration-sign-up-desktop.svg" media="(width > 768px)" />
                  <source srcSet="/assets/images/illustration-sign-up-tablet.svg" media="(width > 375px)" />
                  <source srcSet="/assets/images/illustration-sign-up-mobile.svg" media="(width >= 0px)" />
                  <img src="/assets/images/illustration-sign-up-desktop.svg" alt="Image Illustration Sign-Up" className="w-full h-full" />
                </picture>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>

  );
}