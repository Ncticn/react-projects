import BrandLogo from "./BrandLogo";

export default function HeaderBase() {
  return (
    <header>
      <div className="px-5 pt-16 pb-8 md:px-10 md:py-16 lg:px-20">
        <div className="mx-auto max-w-280">
          <div className="flex items-stretch justify-start gap-2">
            <a href="/" aria-label="Go to Homepage">
              <BrandLogo />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
