export default function HeaderBase() {
  return (
    <header>
      <div className="bg-navy-850 py-6 md:py-10 lg:py-14">
        <div className="mx-auto max-w-xs md:max-w-2xl lg:max-w-7xl">
          <div className="flex flex-row items-center justify-between">
            <a
              href="/"
              aria-label="Go to homepage"
              className="max-w-20 md:max-w-35"
            >
              <img
                src="/logo.svg"
                alt="Brand Logo"
                className="object-contain"
              />
            </a>

            <nav>
              <ul className="flex flex-row items-center justify-start gap-6 md:gap-12 lg:gap-14">
                {["Features", "Team", "Sign In"].map((listItem, index) => (
                  <li key={index}>
                    <a
                      href="/"
                      aria-label={`Go to ${listItem}`}
                      className="text-preset-3-regular block text-white transition-all delay-75 ease-linear hover:font-bold"
                    >
                      {listItem}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
