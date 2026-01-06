import BrandLogoDark from "./BrandLogoDark";
import IconList from "./IconList";

function FooterBase() {
  return (
    <footer>
      <div className="px-20 py-28">
        <div className="flex flex-col items-center justify-center gap-14 w-fit h-auto mx-auto">
          <BrandLogoDark />
          <IconList />
        </div>
      </div>
    </footer>
  );
}
export default FooterBase;
