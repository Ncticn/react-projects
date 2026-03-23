"use client"

import ButtonSubmit from "@/components/ButtonSubmit";
import InputEmail from "@/components/InputEmail";
import Image from "next/image";

export default function Home() {

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




  return (
    <section className="bg-blue-900 h-full flex items-center lg:items-center justify-center">
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

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6 md:space-y-4 lg:space-y-6 w-full not-md:pb-11 not-md:pt-10">
                <InputEmail inputID="input-email" inputLabel="Email address" inputName="input-singup-email" placeholder="email@company.com" />
                <ButtonSubmit />
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
  );
}