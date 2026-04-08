// Next.JS
import Image from "next/image";

// Components
import Button from "@/components/ui/Button";
import InputEmail from "@/components/ui/InputEmail";
import CardFeature from "@/components/ui/CardFeature";
import CardPricing from "@/components/ui/CardPricing";

// Assets
import IllustrationFinancialFreedom from "@/assets/illustrations/illustration-financial-freedom.svg";
import IllustrationWorkanyWhere from "@/assets/illustrations/illustration-work-anywhere.svg";
import IllustrationLifestyle from "@/assets/illustrations/illustration-lifestyle.svg";
import IllustrationPassions from "@/assets/illustrations/illustration-passions.svg";
import BGFooterSquiggle from "@/assets/images/bg-footer-squiggle.svg";
import BGHeroSquiggle from "@/assets/images/bg-hero-squiggle.svg";
import IconFree from "@/assets/icons/icon-free.svg";
import IconPaid from "@/assets/icons/icon-paid.svg";
import IconScroll from "@/assets/icons/icon-scroll.svg";
import IllustrationHeroLeft from "@/assets/illustrations/illustration-hero-left.svg";
import IllustrationHeroRight from "@/assets/illustrations/illustration-hero-right.svg";
import IllustrationHeroMobile from "@/assets/illustrations/illustration-hero-mobile.png";
import Header from "@/components/layout/Header";

export default function Home() {
  const features = [
    {
      id: 1,
      title: "Indulge your passions",
      description:
        "Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
      img: {
        name: "Illustration Passions",
        component: IllustrationPassions,
      },
    },
    {
      id: 2,
      title: "Gain financial freedom",
      description:
        "Start making money work for you. There’s nothing quite like earning while you sleep. ",
      img: {
        name: "Illustration Financial Freedom",
        component: IllustrationFinancialFreedom,
      },
    },
    {
      id: 3,
      title: "Choose your lifestyle",
      description:
        "Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.",
      img: {
        name: "Illustration Lifestyle",
        component: IllustrationLifestyle,
      },
    },
    {
      id: 4,
      title: "Work from anywhere",
      description:
        "Selling online means not being pinned down. Want to work AND travel? Go for it!",
      img: {
        name: "Illustration Work any Where",
        component: IllustrationWorkanyWhere,
      },
    },
  ];

  const pricingList = [
    {
      id: 1,
      title: "Dip your toe",
      description:
        "Just getting started? No problem at all! Our free plan will take you a long way.",
      features: [
        {
          id: 1,
          text: "Unlimited products",
        },
        {
          id: 2,
          text: "Basic analytics",
        },
        {
          id: 3,
          text: "Limited marketplace exposure",
        },
        {
          id: 4,
          text: "10% fee per transaction",
        },
      ],
    },
    {
      id: 2,
      title: "Dive right in",
      description:
        "Ready for the big time? Our paid plan will help you take your business to the next level.",
      features: [
        {
          id: 1,
          text: "Custom domain",
        },
        {
          id: 2,
          text: "Advanced analytics and reports",
        },
        {
          id: 3,
          text: "High marketplace visibility",
        },
        {
          id: 4,
          text: "5% fee per transaction",
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col items-stretch gap-16 overflow-hidden py-8 md:gap-30 md:py-12 lg:py-20">
        <Header />

        <section className="relative z-10 h-57.5 md:hidden">
          <div className="absolute inset-x-0 -right-4 -left-4 md:hidden">
            <Image
              src={IllustrationHeroMobile}
              alt="Image Illustration Hero Mobile"
              placeholder="blur"
              className="object-fill"
            />
          </div>
        </section>

        <section aria-label="Section Hero" className="relative z-20 h-115">
          <div className="relative z-20 mx-auto max-w-85.75 md:max-w-135">
            <div className="flex flex-col items-center justify-center gap-8 text-center md:gap-16">
              <div className="text-wrapper space-y-6">
                <h1 className="text-preset-1 text-neutral-0">
                  Get paid for the work you{" "}
                  <b className="text-cyan-400">love</b> to do.
                </h1>
                <p className="text-preset-5 text-neutral-400">
                  The 9-5 grind is so last century. We believe in living life on
                  your own terms. Whether you’re looking to escape the rat race
                  or set up a side hustle, we’ve got you covered.
                </p>
              </div>
              <Image src={IconScroll} alt="" />
            </div>
          </div>
          <div className="absolute inset-x-0 inset-y-0 top-0 hidden h-full md:block">
            <div className="flex flex-row items-center justify-center">
              <Image
                src={IllustrationHeroLeft}
                alt="Image Illustration Hero Left"
                className="absolute -top-16 -left-44 max-w-75 lg:top-0 lg:-left-16 lg:max-w-100"
              />
              <Image src={BGHeroSquiggle} alt="" />
              <Image
                src={IllustrationHeroRight}
                alt="Image Illustration Hero Right"
                className="absolute top-0 -right-48 max-w-79 lg:-right-14 lg:max-w-99"
              />
            </div>
          </div>
        </section>
      </div>

      <section aria-label="Section Features">
        <div className="mx-auto max-w-full md:max-w-176 lg:max-w-277.5">
          <div className="grid grid-cols-1 grid-rows-4 items-center justify-center gap-12 px-4 md:gap-8 md:px-0 lg:grid-cols-4 lg:grid-rows-1 lg:items-start">
            {features.map((item) => (
              <CardFeature
                key={item.id}
                title={item.title}
                description={item.description}
                img={item.img}
                classList="not-lg:md:not-even:ps-12 lg:not-odd:pt-12"
              />
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Section Pricing" className="lg:px-65">
        <div className="mx-auto max-w-85.75 md:max-w-135 lg:max-w-230">
          <div className="flex flex-col items-center justify-start gap-20 md:gap-24 lg:gap-28">
            <div className="section-header mx-auto max-w-135 space-y-6 text-center">
              <h2 className="text-preset-3 text-neutral-0">
                Our pricing plans
              </h2>
              <p className="text-preset-5 text-neutral-400">
                We only make money when our creators make money. Our plans are
                always affordable, and it’s completely free to get started.
              </p>
            </div>

            <div className="grid grid-cols-1 grid-rows-2 items-center justify-center gap-20 md:mx-11.75 lg:mx-0 lg:grid-cols-2 lg:grid-rows-1 lg:items-stretch lg:gap-7.5">
              <div className="col-span-1 lg:p-4">
                <CardPricing
                  title={pricingList[0].title}
                  description={pricingList[0].description}
                  img={IconFree}
                  featuresList={pricingList[0].features}
                />
              </div>
              <div className="col-span-1">
                <CardPricing
                  title={pricingList[1].title}
                  description={pricingList[1].description}
                  img={IconPaid}
                  featuresList={pricingList[1].features}
                  price="25.00"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Section Subscribe">
        <div className="relative overflow-hidden not-md:px-4 md:py-12.5">
          <div className="relative z-10 flex flex-col items-stretch justify-center gap-10 md:items-center">
            <h2 className="text-preset-3 text-neutral-0 text-center">
              Get notified when we launch
            </h2>
            <form className="not-md:px-6.75">
              <div className="form-control flex flex-col items-stretch justify-center gap-5 md:flex-row md:items-start">
                <InputEmail
                  inputId="subscribe-input-email"
                  inputName="input-subscribe-email"
                  placeholder="Email address"
                />
                <Button type="submit" text="Get notified" />
              </div>
            </form>
          </div>
          <div className="absolute inset-x-0 inset-y-0 z-0">
            <Image
              src={BGFooterSquiggle}
              alt=""
              className="h-full w-full object-cover not-md:scale-200 not-md:object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
