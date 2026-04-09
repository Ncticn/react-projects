
// Data
import db  from "@/data/SliderList.json"; 

// Components
import Slider from "@/components/Slider";


export default function Home() {


  return (
    <section>
      <Slider slideList={db}/>
    </section>
  );
}