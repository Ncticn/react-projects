import BrandLogo from "./BrandLogo";
import ButtonBase from "./ButtonBase";

function HeaderBase() {
  return (
    <header>
      <div className="px-5 py-4 md:px-11 md:py-6 lg:px-20">
        <div className="mx-auto max-w-280">
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
