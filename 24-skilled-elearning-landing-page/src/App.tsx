import FooterBase from "./components/FooterBase";
import HeaderBase from "./components/HeaderBase";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="relative overflow-hidden">
      <HeaderBase />
      <main>
        <LandingPage />
      </main>
      <FooterBase />
    </div>
  );
}

export default App;
