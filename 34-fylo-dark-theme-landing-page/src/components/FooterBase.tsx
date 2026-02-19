import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterBase() {
  return (
    <footer>
      <div className="bg-navy-950 pt-64 pb-12 md:pt-52.75 md:pb-16 lg:pt-40 lg:pb-14">
        <div className="mx-auto max-w-xs md:max-w-2xl lg:max-w-7xl">
          <div className="space-y-10 md:space-y-14 lg:space-y-12">
            <a
              href="/"
              aria-label="Go to homepage"
              className="inline-block max-w-27"
            >
              <img
                src="/logo.svg"
                alt="Brand Logo"
                className="object-contain"
              />
            </a>

            <div className="flex flex-col flex-wrap items-stretch justify-between gap-y-12 md:flex-row md:items-start md:gap-y-14">
              <div className="footer-content inline-flex flex-col items-start gap-4 md:flex-row md:gap-20">
                <div className="footer-address flex max-w-95 flex-row items-start gap-4">
                  <img
                    src="src/assets/icons/icon-location.svg"
                    alt="Icon Location"
                    className="object-contain"
                  />
                  <p className="text-preset-7-regular text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
                <div className="footer-contact-info flex flex-col items-start gap-4">
                  <a href="tel:+1-543-123-4567" className="space-x-4">
                    <img
                      src="src/assets/icons/icon-phone.svg"
                      alt="Icon Phone"
                      className="inline-block object-contain"
                    />
                    <span className="text-preset-8 inline-block text-white">
                      +1-543-123-4567
                    </span>
                  </a>
                  <a href="mailto:example@fylo.com" className="space-x-4">
                    <img
                      src="src/assets/icons/icon-email.svg"
                      alt="Icon Phone"
                      className="inline-block object-contain"
                    />
                    <span className="text-preset-8 inline-block text-white">
                      example@fylo.com
                    </span>
                  </a>
                </div>
              </div>
              <div className="footer-links md:not-lg:w-2/3">
                <div className="flex flex-col items-start justify-start gap-10 md:flex-row md:gap-20">
                  {[
                    ["About Us", "Jobs", "Press", "Blog"],
                    ["Contact Us", "Terms", "Privacy"],
                  ].map((listItems, index) => (
                    <ul key={index} className="flex flex-col flex-wrap gap-y-4">
                      {listItems.map((listItem, i) => (
                        <li key={i}>
                          <a
                            href="/"
                            target="_self"
                            aria-label={`Go to ${listItem}`}
                            className="text-preset-7-regular block text-white transition-all delay-75 ease-linear hover:font-bold!"
                          >
                            {listItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>

              <div className="footer-social-media md:px-2 md:not-lg:w-1/3 lg:px-0">
                <div className="flex flex-row items-stretch justify-center gap-3 md:justify-start md:gap-4">
                  {[faFacebookF, faTwitter, faInstagram].map(
                    (socialMedia, index) => (
                      <a
                        href="/"
                        target="_blank"
                        className="border-navy-50 flex size-8 items-center justify-center rounded-full border p-1 text-white transition-all delay-75 ease-linear hover:border-blue-300 hover:text-blue-300"
                        key={index}
                      >
                        <FontAwesomeIcon icon={socialMedia} />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
