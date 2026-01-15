import FooterBase from "./components/FooterBase";
import HeaderBase from "./components/HeaderBase";
import LandingPage from "./pages/LandingPage";
import PageCounter from "./components/PageCounter";

function App() {
  return (
    <>
      <HeaderBase />
      <main>
        <LandingPage />
      </main>
      <div className="relative z-50 h-full w-full">
        <div className="relative top-7 right-0 left-0">
          <PageCounter count="02" />
        </div>
      </div>
      <FooterBase />
    </>
  );
}

export default App;
