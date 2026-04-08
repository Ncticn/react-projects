// Components
import CardAI from "./components/CardAI";
import CardFaster from "./components/CardFaster";
import CardGrow from "./components/CardGrow";
import CardMaintain from "./components/CardMaintain";
import CardManage from "./components/CardManage";
import CardQuicker from "./components/CardQuicker";
import CardSchedule from "./components/CardSchedule";
import CardSocialMedia from "./components/CardSocialMedia";

function App() {
  return (
    <section className="mx-auto space-y-4 px-4 py-8 md:px-10 md:py-13 lg:max-w-280">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[repeat(4,256px)] lg:grid-rows-[324px_247px_247px]">
        <div className="order-7 flex flex-col gap-8 md:col-start-1 md:col-end-3 not-lg:md:flex-row lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-4">
          <CardQuicker />
          <CardAI />
        </div>

        <div className="order-1 md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2">
          <CardSocialMedia />
        </div>

        <div className="order-4 md:col-start-1 md:col-end-3 lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3">
          <CardSchedule />
        </div>

        <div className="order-2 md:col-start-1 md:col-end-2 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
          <CardManage />
        </div>

        <div className="order-3 md:col-start-2 md:col-end-3 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3">
          <CardMaintain />
        </div>

        <div className="order-6 md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4">
          <CardFaster />
        </div>

        <div className="order-5 md:col-start-1 md:col-end-3 lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-4">
          <CardGrow />
        </div>
      </div>
    </section>
  );
}

export default App;
