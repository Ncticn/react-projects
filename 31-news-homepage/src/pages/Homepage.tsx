import ButtonBase from "../components/ButtonBase";

export default function Homepage() {
  return (
    <section aria-label="Section Hero">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2 lg:grid-rows-1">
        <picture className="col-span-1 lg:col-span-2">
          <source
            srcSet="/images/image-web-3-desktop.jpg"
            media="(width >= 768px)"
          />
          <source
            srcSet="/images/image-web-3-mobile.jpg"
            media="(width >= 0px)"
          />
          <img
            src="/images/image-web-3-desktop.jpg"
            alt="Image Lego's"
            className="object-contain"
          />
        </picture>
        <h1 className="text-preset-1 text-navy-950 col-span-1">
          The Bright Future of Web 3.0?
        </h1>
        <div className="col-span-1">
          <div className="flex flex-col items-start justify-between gap-8">
            <p className="text-preset-6 text-navy-600">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <ButtonBase />
          </div>
        </div>
      </div>
    </section>
  );
}
