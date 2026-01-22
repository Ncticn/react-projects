import BrandLogo from "./BrandLogo";

function HeaderBase() {
  return (
    <header>
      <nav className="flex flex-row items-center justify-start">
        <BrandLogo />
      </nav>
    </header>
  );
}
export default HeaderBase;
