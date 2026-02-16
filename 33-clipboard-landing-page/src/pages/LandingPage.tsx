import ButtonBase from "../components/ButtonBase";

export default function LandingPage() {
  return (
    <>
      <section aria-label="Section Hero">
        <div className="bg-[url(/images/bg-header-mobile.png)] bg-contain bg-top bg-no-repeat pt-30 md:bg-[url(/images/bg-header-desktop.png)] md:pt-32.5">
          <div className="mx-auto max-w-79.5 md:max-w-154 lg:max-w-182.5">
            <div className="flex flex-col items-center justify-start gap-14">
              <img
                src="/logo.svg"
                alt="Brand Logo"
                className="size-31.25 object-contain"
              />
              <div className="space-y-12">
                <div className="section-content space-y-4 text-center">
                  <h1 className="text-preset-1 text-gray-700">
                    A history of everything you copy
                  </h1>
                  <p className="text-preset-7-regular text-gray-500">
                    Clipboard allows you to track and organize everything you
                    copy. Instantly access your clipboard on all your devices.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center not-md:space-y-6 md:flex-row md:space-x-4">
                  <ButtonBase type="primary" text="Download for iOS" />
                  <ButtonBase type="secondary" text="Download for Mac" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="">
        <div className="not-md:max-w-78 not-lg:mx-auto md:not-lg:max-w-154">
          <div className="flex flex-col items-center justify-start gap-18 md:gap-24 lg:gap-16">
            <div className="section-content space-y-4 text-center lg:mx-auto lg:max-w-182">
              <h2 className="text-preset-3 text-gray-700">
                Keep track of your snippets
              </h2>
              <p className="text-preset-7-regular text-gray-500">
                Clipboard instantly stores any item you copy in the cloud,
                meaning you can access your snippets immediately on all your
                devices. Our Mac and iOS apps will help you organize everything.
              </p>
            </div>
            <div className="section-image w-full">
              <div className="flex flex-col items-center justify-start not-md:gap-18 md:gap-24 lg:flex-row">
                <img
                  src="/images/image-computer.png"
                  alt="Image Computer"
                  className="object-contain lg:relative lg:-left-10"
                />
                <div className="flex max-w-87.5 flex-col justify-start gap-14 md:gap-16 lg:items-start">
                  <div className="space-y-2 text-center lg:text-start">
                    <h3 className="text-preset-6 text-gray-700">
                      Quick Search
                    </h3>
                    <p className="text-preset-8 text-gray-500">
                      Easily search your snippets by content, category, web
                      address, application, and more.
                    </p>
                  </div>
                  <div className="space-y-2 text-center lg:text-start">
                    <h3 className="text-preset-6 text-gray-700">iCloud Sync</h3>
                    <p className="text-preset-8 text-gray-500">
                      Instantly saves and syncs snippets across all your
                      devices.
                    </p>
                  </div>
                  <div className="space-y-2 text-center lg:text-start">
                    <h3 className="text-preset-6 text-gray-700">
                      Complete History
                    </h3>
                    <p className="text-preset-8 text-gray-500">
                      Retrieve any snippets from the first moment you started
                      using the app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="">
        <div className="mx-auto max-w-77 md:max-w-152.5 lg:max-w-186">
          <div className="flex flex-col items-center justify-start gap-18 md:gap-20 lg:gap-24">
            <div className="section-content space-y-4 text-center">
              <h2 className="text-preset-3 text-gray-700">
                Access Clipboard anywhere
              </h2>
              <p className="text-preset-7-regular text-gray-500">
                Whether you’re on the go, or at your computer, you can access
                all your Clipboard snippets in a few simple clicks.
              </p>
            </div>
            <div className="section-image">
              <img
                src="/images/image-devices.png"
                alt="Image Tablet & Smartphone"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Section Features">
        <div className="mx-auto max-w-77.75 md:max-w-154 lg:max-w-278.5">
          <div className="flex flex-col items-center justify-center gap-22 md:gap-18">
            <div className="space-y-4 text-center">
              <h2 className="text-preset-3 text-gray-700">
                Supercharge your workflow
              </h2>
              <p className="text-preset-7-regular h-fit text-gray-500">
                We’ve got the tools to boost your productivity.
              </p>
            </div>

            <div className="flex flex-col items-stretch justify-center gap-14 md:gap-12 lg:flex-row lg:gap-8">
              <article className="flex max-w-full flex-col items-center justify-start gap-10 md:max-w-100 lg:max-w-87.5">
                <figure className="min-h-10">
                  <img
                    src="/icons/icon-blacklist.svg"
                    alt="Icon Blacklist"
                    className="object-contain"
                  />
                </figure>
                <div className="space-y-4 text-center">
                  <h3 className="text-preset-6 text-gray-700">
                    Create blacklists
                  </h3>
                  <p className="text-preset-8 h-fit text-gray-500">
                    Ensure sensitive information never makes its way to your
                    clipboard by excluding certain sources.
                  </p>
                </div>
              </article>

              <article className="flex max-w-full flex-col items-center justify-start gap-10 md:max-w-100 lg:max-w-87.5">
                <figure className="min-h-10">
                  <img
                    src="/icons/icon-text.svg"
                    alt="Icon Text"
                    className="object-contain"
                  />
                </figure>
                <div className="space-y-4 text-center">
                  <h3 className="text-preset-6 text-gray-700">
                    Plain text snippets
                  </h3>
                  <p className="text-preset-8 h-fit text-gray-500">
                    Remove unwanted formatting from copied text for a consistent
                    look.
                  </p>
                </div>
              </article>

              <article className="flex max-w-full flex-col items-center justify-start gap-10 md:max-w-100 lg:max-w-87.5">
                <figure className="min-h-10">
                  <img
                    src="/icons/icon-preview.svg"
                    alt="Icon Preview"
                    className="object-contain"
                  />
                </figure>
                <div className="space-y-4 text-center">
                  <h3 className="text-preset-6 text-gray-700">Sneak preview</h3>
                  <p className="text-preset-8 text-gray-500">
                    Quick preview of all snippets on your Clipboard for easy
                    access.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Section Trusted By">
        <div className="mx-auto max-w-35 md:max-w-148 lg:max-w-278">
          <div className="flex flex-row flex-wrap items-center justify-center gap-14 lg:gap-24">
            {[
              "/logos/logo-google.png",
              "/logos/logo-ibm.png",
              "/logos/logo-microsoft.png",
              "/logos/logo-hp.png",
              "/logos/logo-vector-graphics.png",
            ].map((logo, index) => (
              <img
                src={logo}
                key={index}
                alt={`Trusted by Logo ${index}`}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Section CTA">
        <div className="mx-auto max-w-77.75 pb-42 md:max-w-154 md:pb-36.5 lg:max-w-182.5">
          <div className="flex flex-col items-stretch justify-start gap-4 text-center">
            <h2 className="text-preset-3 text-gray-700">
              Clipboard for iOS and Mac OS
            </h2>
            <p className="text-preset-7-regular mb-10 text-gray-500 md:mb-8">
              Available for free on the App Store. Download for Mac or iOS, sync
              with iCloud and you’re ready to start adding to your clipboard.
            </p>
            <div className="flex flex-col items-center justify-center not-md:space-y-6 md:flex-row md:space-x-4">
              <ButtonBase type="primary" text="Download for iOS" />
              <ButtonBase type="secondary" text="Download for Mac" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
