import FooterBase from "../components/FooterBase";
import LandingPage from "../pages/LandingPage";

export default function LayoutBase() {
  return (
    <>
      <main className="mb-16 space-y-30 md:mb-20 lg:mb-30">
        <LandingPage />
      </main>
      <FooterBase />
    </>
  );
}
