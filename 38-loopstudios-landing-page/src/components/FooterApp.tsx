export default function FooterApp() {
  const socialMediaLinks = [
    { id: 1, name: "Facebook", url: "icon-facebook.svg" },
    { id: 2, name: "Twitter", url: "icon-twitter.svg" },
    { id: 3, name: "Pinterest", url: "icon-pinterest.svg" },
    { id: 4, name: "Instagram", url: "icon-instagram.svg" },
  ];

  const navLinks = [
    { id: 1, name: "About", url: "#" },
    { id: 2, name: "Careers", url: "#" },
    { id: 3, name: "Events", url: "#" },
    { id: 4, name: "Products", url: "#" },
  ];
  return (
    <footer>
      <div className="bg-black px-2 py-8">
        <div className="mx-auto max-w-65.75 md:max-w-152 lg:max-w-277.5">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-0">
            <div className="footer-links-and-logo">
              <div className="flex flex-col items-center justify-start gap-10 md:items-start md:gap-6">
                <a href="/" aria-label="Go To Homepage">
                  <img
                    src="/logo.svg"
                    alt="Company Logo"
                    className="h-6 object-contain"
                  />
                </a>

                <ul className="footer-links flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-start lg:gap-8">
                  {navLinks.map((navLink) => (
                    <li key={navLink.id}>
                      <a
                        href={navLink.url}
                        className="text-preset-6 block text-white after:mx-auto after:mt-2 after:block after:h-0.5 after:w-6 after:bg-white after:opacity-0 after:transition-all after:delay-75 after:ease-linear hover:after:opacity-100"
                        aria-label={`Go to ${navLink.name}`}
                      >
                        {navLink.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="footer-social-media">
              <div className="flex flex-col items-center justify-start gap-4 md:items-end md:gap-6">
                <div className="flex flex-row items-center justify-center gap-4">
                  {socialMediaLinks.map((socialMediaLink) => (
                    <a
                      href="#"
                      key={socialMediaLink.id}
                      className="text-preset-6 block text-white after:mx-auto after:mt-2 after:block after:h-0.5 after:w-6 after:bg-white after:opacity-0 after:transition-all after:delay-75 after:ease-linear hover:after:opacity-100"
                      aria-label={`Go to ${socialMediaLink.name}`}
                    >
                      <img
                        src={`/src/assets/icons/${socialMediaLink.url}`}
                        alt={`Icon ${socialMediaLink.name}`}
                      />
                    </a>
                  ))}
                </div>
                <p className="text-preset-6 text-white opacity-50 md:mb-4">
                  © 2021 Loopstudios. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
