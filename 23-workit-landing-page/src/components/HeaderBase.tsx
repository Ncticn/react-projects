import BrandLogoWhite from "./BrandLogoWhite";
import ButtonSecondary from "./ButtonSecondary";

function HeaderBase() {
  return (
    <header>
      <div className="px-5 md:px-11 pt-8 lg:px-20 lg:pt-14 py-0">
        <div className="flex items-center justify-between">
          <BrandLogoWhite />
          <ButtonSecondary>Apply for access</ButtonSecondary>
        </div>
      </div>
    </header>
  );
}
export default HeaderBase;
