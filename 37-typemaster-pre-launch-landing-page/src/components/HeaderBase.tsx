import BrandLogo from "./BrandLogo";
import ButtonBase from "./ButtonBase";

export default function HeaderBase() {
  return (
    <header>
      <div className="header-body">
        <div className="flex items-center justify-between gap-0">
          <BrandLogo />
          <ButtonBase buttonType="secondary" buttonText="Pre-order now" />
        </div>
      </div>
    </header>
  );
}
