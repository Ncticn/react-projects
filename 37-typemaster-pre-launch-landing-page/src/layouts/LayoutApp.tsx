import FooterBase from "../components/FooterBase";
import HeaderBase from "../components/HeaderBase";
import LandingPage from "../pages/LandingPage";

export default function LayoutApp() {
  return (
    <>
      <div className="py-6 md:py-10">
        <div className="mx-auto max-w-85.75 md:max-w-176 lg:max-w-277.5">
          <div className="flex flex-col items-stretch justify-start gap-30">
            <HeaderBase />
            <main>
              <LandingPage />
            </main>
            <FooterBase />
          </div>
        </div>
      </div>
    </>
  );
}
