import BrandLogo from "./BrandLogo";

export default function HeaderBase() {
  return (
    <header>
      <div className="px-20 pt-20 pb-0">
        <div className="flex items-center justify-center gap-2">
          <BrandLogo />
        </div>
      </div>
    </header>
  );
}
