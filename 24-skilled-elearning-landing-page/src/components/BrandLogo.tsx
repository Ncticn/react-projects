type BrandLogoProps = {
  logoType: "light" | "dark";
};

function BrandLogo({ logoType }: BrandLogoProps) {
  let logoUrl: string = "";
  if (logoType === "dark") {
    logoUrl = "../logo-dark.svg";
  } else {
    logoUrl = "../logo-light.svg";
  }

  return (
    <div className="header-logo max-w-20 lg:max-w-full">
      <img
        src={logoUrl}
        alt="Brand Logo"
        className="object-contain w-full h-auto"
      />
    </div>
  );
}
export default BrandLogo;
