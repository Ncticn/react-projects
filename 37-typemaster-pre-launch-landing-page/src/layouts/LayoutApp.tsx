import FooterBase from "../components/FooterBase";
import HeaderBase from "../components/HeaderBase";
import LandingPage from "../pages/LandingPage";

export default function LayoutApp() {
  return (
    <>
      <div className="py-6 md:py-10">
        <div className="flex flex-col items-stretch justify-start gap-16 md:gap-20 lg:gap-30">
          <HeaderBase />
          <main className="space-y-16 md:space-y-20 lg:space-y-30">
            <LandingPage />
          </main>
          <FooterBase />
        </div>
      </div>
    </>
  );
}
