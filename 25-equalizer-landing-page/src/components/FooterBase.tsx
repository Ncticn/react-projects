import BrandLogo from "./BrandLogo";
import SocialMediaLink from "./SocialMediaLink";

export default function FooterBase() {
  return (
    <footer>
      <div className="px-5 pt-16 pb-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-172 lg:max-w-280">
          <div className="grid grid-cols-1 grid-rows-1 items-start justify-between not-md:gap-8 md:grid-cols-4 md:grid-rows-2 lg:grid-rows-1">
            <div className="brand-logo col-span-1 row-span-1 md:col-span-4 lg:col-span-1">
              <BrandLogo />
            </div>
            <div className="brand-content col-span-1 md:col-span-3 md:row-span-1 lg:col-span-2">
              <p className="text-preset-5 text-slate-base">
                All rights reserved © Equalizer 2021
              </p>
              <address className="not-italic">
                Have any problems? Contact us via social media or email us at
              </address>
              <a
                href="mailto:equalizer@example.com"
                className="text-preset-5 text-slate-base font-bold!"
                aria-label="Click to send an email."
              >
                equalizer@example.com
              </a>
            </div>
            <nav
              aria-label="Social Media Links"
              className="social-media col-span-1 row-span-1 self-center md:justify-self-end"
            >
              <ul className="flex flex-row items-stretch justify-start gap-8">
                <li>
                  <SocialMediaLink
                    mediaType="facebook"
                    ariaLabel="Facebook Profile Page"
                  />
                </li>
                <li>
                  <SocialMediaLink
                    mediaType="instagram"
                    ariaLabel="Instagram Profile Page"
                  />
                </li>
                <li>
                  <SocialMediaLink
                    mediaType="twitter"
                    ariaLabel="Twitter Profile Page"
                  />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
