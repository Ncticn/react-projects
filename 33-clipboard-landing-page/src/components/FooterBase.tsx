import IconFacebook from "./IconFacebook";
import IconInstagram from "./IconInstagram";
import IconTwitter from "./IconTwitter";

export default function FooterBase() {
  return (
    <footer>
      <div className="bg-gray-50 py-14 lg:px-41.25 lg:py-10.25">
        <div className="footer-wrapper grid grid-cols-1 items-center justify-between gap-8 lg:grid-cols-3 lg:gap-0">
          <div className="col-span-1 flex flex-col items-center justify-between gap-8 lg:col-span-2 lg:flex-row lg:gap-0">
            <a
              href="/"
              aria-label="Go to homepage"
              className="company-logo inline-block size-13.75"
            >
              <img
                src="/logo.svg"
                alt="Brand Logo"
                className="block object-contain"
              />
            </a>
            <div className="footer-map-list flex flex-col items-stretch justify-start gap-6 lg:flex-row lg:items-start lg:gap-16">
              {[
                ["FAQs", "Contact Us"],
                ["Privacy Policy", "Press Kit"],
                ["Install Guide"],
              ].map((listItem, index) => (
                <ul className="space-y-6 lg:space-y-2" key={index}>
                  {listItem.map((item, index) => (
                    <li key={index} className="text-center lg:text-start">
                      <a
                        href="/"
                        aria-label="Go to FAQs"
                        className="text-preset-7-regular block text-gray-700 transition-colors delay-75 ease-linear hover:text-green-500"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="social-list col-span-1">
            <ul className="flex flex-row items-center justify-center gap-6 lg:justify-end">
              {[
                { name: "Facebook", component: <IconFacebook /> },
                { name: "Twitter", component: <IconTwitter /> },
                { name: "Instagram", component: <IconInstagram /> },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="/"
                    className="block text-gray-700 transition-colors delay-75 ease-linear hover:text-green-500"
                    aria-label={`Go to ${item.name}`}
                  >
                    {item.component}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
