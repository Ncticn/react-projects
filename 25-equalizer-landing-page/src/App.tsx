import FooterBase from "./components/FooterBase";
import HeaderBase from "./components/HeaderBase";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <HeaderBase />
      <main>
        <img
          src="/assets/patterns/bg-pattern-1.svg"
          alt="Background Pattern Image"
          className="absolute top-0 -right-10 z-20 not-md:hidden lg:right-0"
        />
        <LandingPage />
      </main>
      <FooterBase />
    </>
  );
}

export default App;
