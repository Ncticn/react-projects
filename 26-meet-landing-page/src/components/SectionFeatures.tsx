import PageCounter from "./PageCounter";

export default function SectionFeatures() {
  return (
    <section aria-label="Section Features">
      <div className="px-8 pt-8 pb-16 md:pt-14 lg:px-20 lg:pb-18">
        <div className="flex flex-col items-center justify-start gap-16">
          <PageCounter count="1" />
          <div className="image-gallery">
            <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
              <img
                src="src/assets/images/image-woman-in-videocall.jpg"
                alt=""
                className="max-w-36 rounded-lg md:max-w-38 lg:max-w-3xs"
              />
              <img
                src="src/assets/images/image-women-videochatting.jpg"
                alt=""
                className="max-w-36 rounded-lg md:max-w-38 lg:max-w-3xs"
              />
              <img
                src="src/assets/images/image-men-in-meeting.jpg"
                alt=""
                className="max-w-36 rounded-lg md:max-w-38 lg:max-w-3xs"
              />
              <img
                src="src/assets/images/image-man-texting.jpg"
                alt=""
                className="max-w-36 rounded-lg md:max-w-38 lg:max-w-3xs"
              />
            </div>
          </div>
          <div className="main-content max-w-126 space-y-8 text-center lg:max-w-136">
            <div className="title mx-auto space-y-4 md:max-w-5/6 lg:max-w-4/5">
              <h3 className="text-preset-3 tracking-[4px] text-cyan-600 uppercase">
                Built for modern use
              </h3>
              <h2 className="text-preset-2 text-slate-900">
                Smarter meetings, all in one place
              </h2>
            </div>
            <p className="text-preset-4 text-slate-600">
              Send messages, share files, show your screen, and record your
              meetings — all in one workspace. Control who can join with
              invite-only team access, data encryption, and data export.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
