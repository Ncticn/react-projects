// Next
import Image from "next/image";

// Components
import IllustearionLaptopDesktop from "@/assets/images/illustration-laptop-desktop.svg";
import IllustearionLaptopMobile from "@/assets/images/illustration-laptop-mobile.svg";
import IllustearionEditorDesktop from "@/assets/images/illustration-editor-desktop.svg";
import IllustearionEditorMobile from "@/assets/images/illustration-editor-mobile.svg";
import IllustrationPhones from "@/assets/images/illustration-phones.svg";
import ButtonLink from "@/components/ButtonLink";

export default function Home() {
  return (
    <>
      <section aria-label="Section Hero">
        <div className="mx-auto max-w-87.5">
          <div className="flex flex-col items-stretch justify-center gap-10 text-center">
            <h1 className="text-preset-1 text-white">
              A modern publishing platform
            </h1>
            <p className="text-preset-4 text-white">
              Grow your audience and build your online brand
            </p>
            <div className="space-x-4">
              <ButtonLink type="primary" text="Start for free" />
              <ButtonLink type="secondary" text="Learn More" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Section Feature">
        <div className="mx-auto pt-24 md:max-w-175 lg:max-w-full">
          <h2 className="text-preset-2 mb-14 text-center text-blue-900 md:mb-8 lg:mb-0">
            Designed for the future
          </h2>
          <div className="relative grid grid-cols-1 grid-rows-[326px_1fr] items-center gap-14 overflow-hidden md:grid-cols-1 md:grid-rows-[690px_1fr] md:gap-4 lg:grid-cols-2 lg:grid-rows-[768px] lg:gap-0">
            <div className="order-2 max-w-79.5 space-y-14 not-lg:mx-auto md:max-w-135 md:space-y-16 lg:order-1 lg:ms-auto">
              <TextGroup
                title="Introducing an extensible editor"
                description="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
              />

              <TextGroup
                title="Robust content management"
                description="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
              />
            </div>

            <div className="relative hidden h-full lg:order-2 lg:block">
              <Image
                src={IllustearionEditorDesktop}
                alt="Image Illustration Laptop"
                fill
                className="drop-shadow-[0px_20px_40px_rgba(108,141,228,24%)] lg:object-cover lg:object-left lg:ps-32"
              />
            </div>

            <div className="relative order-1 h-full lg:hidden">
              <Image
                src={IllustearionEditorMobile}
                alt="Image Illustration Laptop"
                fill
                className="object-cover object-center drop-shadow-[0px_20px_40px_rgba(108,141,228,24%)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Section İnfo">
        <div className="relative min-h-204 overflow-hidden md:min-h-159 lg:min-h-100">
          <div className="relative z-20 mx-auto flex max-w-[1110px] flex-col items-center justify-start gap-0 lg:flex-row lg:justify-between">
            <div className="max-w-[328px] lg:max-w-[472px]">
              <Image src={IllustrationPhones} alt="Illustration Phones" />
            </div>

            <div className="max-w-[328px] space-y-8 text-center md:max-w-[540px] lg:pt-20 lg:text-start">
              <h1 className="text-preset-2 text-white">
                State of the Art Infrastructure
              </h1>
              <p className="text-preset-5 text-white">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>

          <div className="absolute inset-x-0 top-[20%] min-h-156.25 overflow-hidden rounded-tr-[100px] rounded-bl-[100px] bg-linear-to-br from-[#2D2E40] to-[#3F4164] md:top-[23%] md:min-h-116">
            <div className="absolute -top-70 h-156.25 w-full bg-[url(src/assets/patterns/bg-pattern-circles.svg)] bg-cover bg-center bg-no-repeat md:-top-85 md:bg-contain lg:top-0 lg:left-0 lg:bg-auto lg:bg-left lg:bg-position-[-50%_125%]"></div>
          </div>
        </div>
      </section>

      <section aria-label="Section Feature">
        <div className="mx-auto md:max-w-175 lg:max-w-full">
          <div className="relative grid grid-cols-1 grid-rows-[326px_1fr] items-center gap-14 overflow-hidden md:grid-cols-1 md:grid-rows-[690px_1fr] md:gap-4 lg:grid-cols-2 lg:grid-rows-[768px] lg:gap-0">
            <div className="relative hidden h-full lg:block">
              <Image
                src={IllustearionLaptopDesktop}
                alt="Image Illustration Laptop"
                fill
                className="drop-shadow-[0px_20px_40px_rgba(108,141,228,24%)] lg:object-cover lg:object-right lg:pe-10"
              />
            </div>

            <div className="relative h-full lg:hidden">
              <Image
                src={IllustearionLaptopMobile}
                alt="Image Illustration Laptop"
                fill
                className="object-cover object-center drop-shadow-[0px_20px_40px_rgba(108,141,228,24%)]"
              />
            </div>

            <div className="max-w-79.5 space-y-14 not-lg:mx-auto md:max-w-135 md:space-y-16 lg:me-auto">
              <TextGroup
                title="Free, open, simple"
                description="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
              />
              <TextGroup
                title="Powerful tooling"
                description="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TextGroup({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="section-text-group space-y-4 text-center lg:text-start">
      <h3 className="text-preset-3 text-blue-900">{title}</h3>
      <p className="text-preset-5 text-gray-600">{description}</p>
    </div>
  );
}
