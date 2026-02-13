import ButtonLink from "../components/ButtonLink";
import CardTestimonial from "../components/CardTestimonial";

export default function LandingPage() {
  const clientTestimonials = [
    {
      id: "1",
      imgUrl: "/images/image-emily.jpg",
      comment:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      author: {
        name: "Emily R.",
        title: "Marketing Director",
      },
    },
    {
      id: "2",
      imgUrl: "/images/image-thomas.jpg",
      comment:
        "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      author: {
        name: "Thomas S.",
        title: "Chief Operating Officer",
      },
    },
    {
      id: "3",
      imgUrl: "/images/image-jennie.jpg",
      comment:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      author: {
        name: "Jennie F.",
        title: "Business Owner",
      },
    },
  ];

  return (
    <>
      <section aria-label="Section Hero">
        <div className="flex h-200 flex-col items-center justify-center bg-[url(/images/mobile/image-header.jpg)] bg-cover bg-center bg-no-repeat lg:bg-[url(/images/desktop/image-header.jpg)] lg:bg-cover">
          <div className="mx-auto max-w-full md:max-w-md lg:max-w-186">
            <div className="flex flex-col items-center justify-center gap-24">
              <h1 className="text-preset-1 text-center text-white uppercase">
                We are creatives
              </h1>
              <img
                src="/icons/icon-arrow-down.svg"
                alt="Icon Arrow Down"
                className="animate-bounce object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Section Features">
        <div className="flex flex-col lg:flex-row">
          <div className="order-2 flex items-center overflow-hidden lg:order-1 lg:w-1/2">
            <div className="mx-auto max-w-xs py-18 text-center md:max-w-111.25 lg:text-start">
              <h2 className="text-preset-3 text-grey-950 mb-6 md:mb-8">
                Transform your brand
              </h2>
              <p className="text-preset-10 text-grey-550 mb-6 md:mb-8 lg:mb-4">
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <ButtonLink text="Learn More" type="yellow" url="/" />
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:w-1/2">
            <img
              src="/images/desktop/image-transform.jpg"
              alt="Image Transform"
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="order-2 flex items-center overflow-hidden lg:w-1/2">
            <div className="mx-auto max-w-xs py-18 text-center md:max-w-111.25 lg:text-start">
              <h2 className="text-preset-3 text-grey-950 mb-6 md:mb-8">
                Stand out to the right audience
              </h2>
              <p className="text-preset-10 text-grey-550 mb-6 md:mb-8 lg:mb-4">
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>
              <ButtonLink text="Learn More" type="red" url="/" />
            </div>
          </div>
          <div className="order-1 lg:w-1/2">
            <img
              src="/images/desktop/image-stand-out.jpg"
              alt="Image Transform"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 grid-rows-[600px_600px] lg:grid-cols-2 lg:grid-rows-[600px]">
          <div className="flex bg-[url(/images/mobile/image-graphic-design.jpg)] bg-contain bg-center bg-no-repeat md:bg-[url(/images/desktop/image-graphic-design.jpg)] md:bg-cover">
            <div className="mx-auto flex max-w-84 flex-col items-center justify-start gap-8 self-end py-14">
              <h3 className="text-preset-5 text-green-800">Graphic Design</h3>
              <p className="text-preset-11 text-center text-green-600">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </div>

          <div className="flex bg-[url(/images/mobile/image-photography.jpg)] bg-contain bg-center bg-no-repeat md:bg-[url(/images/desktop/image-photography.jpg)] md:bg-cover">
            <div className="mx-auto flex max-w-84 flex-col items-center justify-start gap-8 self-end py-14">
              <h3 className="text-preset-5 text-blue-950">Photography</h3>
              <p className="text-preset-11 text-center text-blue-800">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Section Testimonial">
        <div className="py-14 md:py-18 lg:py-40">
          <div className="mx-auto max-w-278.5">
            <div className="flex flex-col items-center justify-start gap-20">
              <h2 className="text-preset-6 text-grey-400">
                CLIENT TESTIMONIALS
              </h2>
              <div className="grid grid-cols-[330px] gap-14 md:grid-cols-[600px] lg:grid-cols-3 lg:gap-8">
                {clientTestimonials.map((testimonial) => (
                  <CardTestimonial {...testimonial} key={testimonial.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Section Gallery">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <img
            src="/images/desktop/image-gallery-milkbottles.jpg"
            alt="Image Gallery Milkbottles"
            className="object-contain"
          />
          <img
            src="/images/desktop/image-gallery-orange.jpg"
            alt="Image Gallery Orange"
            className="object-contain"
          />
          <img
            src="/images/desktop/image-gallery-cone.jpg"
            alt="Image Gallery Cone"
            className="object-contain"
          />
          <img
            src="/images/desktop/image-gallery-sugarcubes.jpg"
            alt="Image Gallery Sugarcubes"
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}
