import FooterBase from "../components/FooterBase";
import LandingPage from "../pages/LandingPage";

export default function LayoutBase() {
  return (
    <>
      <main className="space-y-40">
        <LandingPage />
      </main>
      <FooterBase />
    </>
  );
}
