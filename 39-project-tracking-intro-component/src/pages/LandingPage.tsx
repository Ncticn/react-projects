import ButtonApp from "../components/ButtonApp";
import HeaderApp from "../components/HeaderApp";

export default function LandingPage() {
  return (
    <div className="relative h-full overflow-hidden bg-white py-10 before:absolute before:top-0 before:-right-[35%] before:z-0 before:h-106.25 before:w-79.75 before:rounded-bl-[60px] before:bg-blue-100 md:before:right-0 md:before:h-97.5 md:before:w-136.25 lg:h-screen lg:py-16 lg:before:h-106.75 lg:before:w-176.25">
      <div className="flex h-full flex-col items-center justify-center gap-16">
        <HeaderApp />
        <section aria-label="Section Hero" className="relative z-10">
          <div className="section-grid relative grid grid-cols-1 grid-rows-2 gap-10 overflow-hidden md:gap-16 lg:grid-cols-2 lg:grid-rows-1">
            <div className="section-main-content order-2 ms-8 max-w-117.5 space-y-8 md:ms-20 md:space-y-16 lg:order-1 lg:ms-40">
              <div className="section-text-container flex flex-col items-start justify-start gap-4 md:gap-8">
                <div className="title-badge flex flex-col items-start justify-start gap-4">
                  <div className="badge-dashboard flex flex-row items-center justify-start gap-4">
                    <span className="badge inline-flex items-center justify-center gap-2 rounded-full bg-blue-950 px-2.5 py-1.25">
                      <span className="text-preset-4 tracking-1px inline-block font-bold text-white uppercase">
                        NEW
                      </span>
                    </span>

                    <span className="text-preset-4 tracking-5px font-normal text-blue-950 opacity-50">
                      MONOGRAPH DASHBOARD
                    </span>
                  </div>
                  <h1 className="text-preset-1 text-blue-950">
                    POWERFUL INSIGHTS INTO YOUR TEAM
                  </h1>
                </div>
                <p className="text-preset-5 w-[80%] text-blue-950 opacity-75 md:w-[60%]">
                  Project planning and time tracking for agile teams
                </p>
              </div>
              <div className="section-buttons space-x-4 lg:space-x-6">
                <ButtonApp buttonText="SCHEDULE A DEMO" />
                <span className="text-preset-4 tracking-2.5px md:tracking-5px font-normal text-blue-950 uppercase opacity-50">
                  TO SEE A PREVIEW
                </span>
              </div>
            </div>
            <div className="section-image order-1 lg:order-2">
              <img
                src="src/assets/images/illustration-devices.svg"
                alt="Image Illustration Devices"
                className="ms-2.5 min-h-59.75 w-fit object-cover object-left md:min-h-110 lg:min-h-113.75"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
