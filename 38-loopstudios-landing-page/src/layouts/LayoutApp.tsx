import FooterApp from "../components/FooterApp";
import LandingPage from "../pages/LandingPage";

export default function LayoutApp() {
  return (
    <>
      <main className="h-full">
        <LandingPage />
      </main>
      <FooterApp />
    </>
  );
}
