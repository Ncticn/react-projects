import BrandLogo from "./components/BrandLogo";
import CardStorage from "./components/CardStorage";
import IconList from "./components/IconList";

function App() {
  return (
    <main>
      <section>
        <div className="mx-auto max-w-81.5 md:max-w-135 lg:max-w-230.5">
          <div className="flex flex-col items-start justify-center gap-4 lg:flex-row lg:items-end lg:gap-8">
            <div className="card w-full max-w-87.5">
              <div className="bg-blue-850 overflow-hidden rounded-[10px] rounded-tr-[100px] p-10">
                <div className="flex items-center justify-start">
                  <div className="flex flex-col items-start justify-start gap-8">
                    <BrandLogo />
                    <IconList />
                  </div>
                </div>
              </div>
            </div>
            <CardStorage />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
