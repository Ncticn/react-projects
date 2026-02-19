import ButtonBase from "../components/ButtonBase";
import ButtonText from "../components/ButtonText";
import CardRegister from "../components/CardRegiester";
import CardTestimonial from "../components/CardTestimonial";

export default function LandingPage() {
  const comments = [
    {
      id: "1",
      comment:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      author: {
        fullName: "Satish Patel",
        job: "Founder & CEO, Huddle",
        avatarUrl: "/images/profile-1.jpg",
      },
    },
    {
      id: "2",
      comment:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      author: {
        fullName: "Bruce McKenzie",
        job: "Founder & CEO, Huddle",
        avatarUrl: "/images/profile-2.jpg",
      },
    },
    {
      id: "3",
      comment:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      author: {
        fullName: "Iva Boyd",
        job: "Founder & CEO, Huddle",
        avatarUrl: "/images/profile-3.jpg",
      },
    },
  ];

  const features = [
    {
      imgUrl: "src/assets/icons/icon-access-anywhere.svg",
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      imgUrl: "src/assets/icons/icon-security.svg",
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      imgUrl: "src/assets/icons/icon-collaboration.svg",
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      imgUrl: "src/assets/icons/icon-any-file.svg",
      title: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  return (
    <>
      <section aria-label="Section Hero">
        <div className="relative py-16 after:absolute after:inset-x-0 after:-bottom-40 after:-z-20 after:h-112.25 after:bg-[url(src/assets/images/bg-curvy-mobile.svg)] after:bg-contain after:bg-center after:bg-no-repeat md:after:-bottom-28 md:after:bg-[url(src/assets/images/bg-curvy-desktop.svg)] lg:after:bottom-0">
          <div className="mx-auto max-w-75 md:max-w-165 lg:max-w-3xl">
            <div className="flex flex-col gap-14">
              <img
                src="src/assets/images/illustration-intro.png"
                alt="Image Illustration Intro"
                className="object-contain"
              />
              <div className="section-content">
                <div className="flex flex-col items-center justify-start gap-8 text-center">
                  <h1 className="text-preset-1 mb-2 text-white">
                    All your files in one secure location, accessible anywhere.
                  </h1>
                  <p className="text-preset-6 max-w-147.25 text-white">
                    Fylo stores all your most important files in one secure
                    location. Access them wherever you need, share and
                    collaborate with friends family, and co-workers.
                  </p>
                  <ButtonBase
                    ariaLabel="Get Started"
                    text="Get Started"
                    url="/"
                    class="min-w-70"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Section Features">
        <div className="bg-navy-900 py-18.75 md:py-30 lg:py-36.5">
          <div className="mx-auto max-w-75 md:max-w-165 lg:max-w-226.75">
            <div className="grid grid-cols-1 grid-rows-2 items-start justify-between gap-20 md:grid-cols-2 lg:grid-cols-[360px_360px]">
              {features.map((feature, index) => (
                <article className="card-feature" key={index}>
                  <div className="card-feature-wrapper flex flex-col items-center justify-start gap-4">
                    <figure className="size-26">
                      <img
                        src={feature.imgUrl}
                        alt="Icon Access Anywhere"
                        className="card-feature-img object-contain"
                      />
                    </figure>
                    <div className="card-feature-content-wrapper space-y-2 text-center">
                      <h3 className="card-feature-content-title text-preset-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="card-feature-content-description text-preset-8 text-white">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Section About">
        <div className="bg-navy-900 py-18.75 md:py-30 lg:py-36.5">
          <div className="mx-auto max-w-75 md:max-w-165 lg:max-w-296.5">
            <div className="flex flex-col gap-12 md:gap-18 lg:flex-row lg:gap-14">
              <img
                src="src/assets/images/illustration-stay-productive.png"
                alt="Image Illustration Stay Productive"
                className="object-contain"
              />
              <div className="flex flex-col items-start justify-center gap-4 md:gap-6">
                <h2 className="text-preset-1 text-white lg:mb-2 lg:max-w-3/4">
                  Stay productive, wherever you are
                </h2>
                <div className="space-y-4">
                  <p className="text-preset-7-regular text-white">
                    Never let location be an issue when accessing your files.
                    Fylo has you covered for all of your file storage needs.
                  </p>
                  <p className="text-preset-7-regular text-white">
                    Securely share files and folders with friends, family and
                    colleagues for live collaboration. No email attachments
                    required.
                  </p>
                </div>
                <ButtonText
                  ariaLabel="See how Fylo works"
                  text="See how Fylo works"
                  url="/"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Section Testimonial">
        <div className="bg-navy-900 pt-18.75 pb-60 md:pt-18 md:pb-56 lg:pt-30 lg:pb-30">
          <div className="mx-auto max-w-75 md:max-w-165 lg:max-w-7xl">
            <div className="grid grid-cols-[280px] items-center justify-center gap-10 md:grid-cols-[480px] lg:grid-cols-[360px_360px_360px]">
              {comments.map((comment) => (
                <CardTestimonial
                  key={comment.id}
                  id={comment.id}
                  comment={comment.comment}
                  author={comment.author}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Section Register">
        <div className="bg-navy-900 relative py-18.75 md:py-18 lg:py-30">
          <div className="absolute inset-x-0 -top-16 md:-top-24 lg:top-20">
            <CardRegister />
          </div>
        </div>
      </section>
    </>
  );
}
