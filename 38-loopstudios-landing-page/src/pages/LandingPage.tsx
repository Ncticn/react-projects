import ButtonApp from "../components/ButtonApp";
import CardCreation from "../components/CardCreation";
import HeaderApp from "../components/HeaderApp";

export default function LandingPage() {
  const creations = [
    {
      id: 1,
      title: "Deep Earth",
      imgUrl: "image-deep-earth.jpg",
    },
    {
      id: 2,
      title: "Night Arcade",
      imgUrl: "image-night-arcade.jpg",
    },
    {
      id: 3,
      title: "Soccer Team VR",
      imgUrl: "image-soccer-team.jpg",
    },
    {
      id: 4,
      title: `The Grid`,
      imgUrl: "image-grid.jpg",
    },
    {
      id: 5,
      title: "From Up Above VR",
      imgUrl: "image-from-above.jpg",
    },
    {
      id: 6,
      title: "Pocket Borealis",
      imgUrl: "image-pocket-borealis.jpg",
    },
    {
      id: 7,
      title: "The Curiosity",
      imgUrl: "image-curiosity.jpg",
    },
    {
      id: 8,
      title: "Make It Fisheye",
      imgUrl: "image-fisheye.jpg",
    },
  ];
  return (
    <>
      <section aria-label="Section Hero">
        <div className="min-h-162.5 bg-[url(src/assets/images/mobile/image-hero.jpg)] bg-cover bg-top bg-no-repeat md:bg-[url(src/assets/images/desktop/image-hero.jpg)]">
          <div className="section-container mx-auto max-w-81.75 md:max-w-152 lg:max-w-277.5">
            <div className="flex flex-col items-stretch justify-start gap-32.5">
              <HeaderApp />

              <div className="section-content flex max-w-full items-center justify-center border-2 border-white px-6 py-4 md:px-10 md:py-7.25 lg:max-w-162.5">
                <h1 className="text-preset-1 w-full text-white uppercase">
                  Immersive experiences that deliver
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Section About">
        <div className="py-24">
          <div className="mx-auto max-w-81.75 md:max-w-152 lg:max-w-277.5">
            <div className="relative flex flex-col items-start justify-start gap-12 lg:flex-row lg:gap-0">
              <div className="section-image w-full md:h-71 lg:h-125 lg:w-182.5">
                <picture>
                  <source
                    srcSet="src/assets/images/desktop/image-interactive.jpg"
                    media="(width > 768px)"
                  />
                  <source
                    srcSet="src/assets/images/mobile/image-interactive.jpg"
                    media="(width > 0)"
                  />
                  <img
                    src="src/assets/images/desktop/image-interactive.jpg"
                    alt="Image Interactive"
                    className="h-full w-full object-cover object-top"
                  />
                </picture>
              </div>
              <div className="section-content bg-white lg:absolute lg:right-0 lg:bottom-0 lg:max-w-135 lg:ps-24 lg:pt-24">
                <div className="mx-7 space-y-4 text-center md:mx-4 md:space-y-6 lg:text-start">
                  <h2 className="text-preset-2 text-black uppercase">
                    The leader in interactive VR
                  </h2>
                  <p className="text-preset-6 text-black opacity-50">
                    Founded in 2011, Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies
                    around the globe. Our award-winning creations have
                    transformed businesses through digital experiences that bind
                    to their brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Section Creations">
        <div className="pb-24">
          <div className="mx-auto max-w-81.75 md:max-w-152 lg:max-w-280">
            <div className="flex flex-col items-center justify-start gap-8 lg:gap-20">
              <div className="flex w-full flex-row items-center justify-center lg:justify-between">
                <h2 className="text-preset-2 text-black">OUR CREATIONS</h2>
                {window.screen.width > 768 && (
                  <ButtonApp buttonText="SEE ALL" />
                )}
              </div>
              <div className="section-creations-grid grid w-full grid-cols-1 gap-8 lg:grid-cols-4">
                {creations.map((creation) => (
                  <CardCreation
                    cardImageUrl={creation.imgUrl}
                    cardTitle={creation.title}
                    key={creation.id}
                  />
                ))}
              </div>

              {window.screen.width <= 768 && <ButtonApp buttonText="SEE ALL" />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
