import ButtonPrimary from "./ButtonPrimary";

function SectionHero() {
  return (
    <section className="section-hero relative overflow-hidden">
      <div className="px-5 md:px-11 pb-36 lg:px-20 pt-14 lg:pb-74 ">
        <div className="section-hero-content space-y-10 max-w-sm md:max-w-lg lg:max-w-xl mx-auto text-center">
          <h1 className="text-preset-1 text-white">
            Data <u className="decoration-green-base">tailored</u> to <br></br>
            your needs.
          </h1>
          <ButtonPrimary>Learn More</ButtonPrimary>
        </div>
        <img
          src="../patterns/bg-pattern-1.svg"
          alt="Background Pattern Image"
          className="object-contain not-md:hidden absolute md:top-14 lg:top-12 md:-left-56 lg:-left-26"
        />
        <img
          src="../patterns/bg-pattern-2.svg"
          alt="Backround Pattern Image"
          className="object-contain not-md:hidden absolute md:top-50 lg:top-62 md:-right-24 lg:-right-12"
        />
      </div>
    </section>
  );
}
export default SectionHero;
