import BrandLogo from "./BrandLogo";
import ButtonBase from "./ButtonBase";

export default function HeaderBase() {
  return (
    <header>
      <div className="mx-auto max-w-85 md:max-w-176 lg:max-w-277.5">
        <div className="flex items-center justify-between gap-0">
          <BrandLogo />
          <ButtonBase buttonType="secondary" buttonText="Pre-order now" />
        </div>
      </div>
    </header>
  );
}
