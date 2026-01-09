import BrandLogo from "./BrandLogo";
import ButtonBase from "./ButtonBase";

function FooterBase() {
  return (
    <footer>
      <div className="bg-blue-900 px-5 py-6 md:px-11 lg:px-20">
        <div className="mx-auto max-w-280">
          <div className="flex flex-row items-center justify-between">
            <BrandLogo logoType="light" />
            <ButtonBase buttonType="purple" content="Get Started" />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default FooterBase;
