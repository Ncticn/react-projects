import BrandLogo from "./BrandLogo";
import ButtonBase from "./ButtonBase";

function HeaderBase() {
  return (
    <header>
      <div className="px-5 py-4 md:px-11 lg:px-20 md:py-6">
        <div className="max-w-280 mx-auto">
          <div className="flex flex-row items-center justify-between">
            <BrandLogo logoType="dark" />
            <ButtonBase buttonType="black" content="Get Started" />
          </div>
        </div>
      </div>
    </header>
  );
}
export default HeaderBase;
