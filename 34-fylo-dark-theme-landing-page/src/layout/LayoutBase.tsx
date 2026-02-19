import FooterBase from "../components/FooterBase";
import HeaderBase from "../components/HeaderBase";
import LandingPage from "../pages/LandingPage";

export default function LayoutBase() {
  return (
    <>
      <HeaderBase />
      <main>
        <LandingPage />
      </main>
      <FooterBase />
    </>
  );
}
