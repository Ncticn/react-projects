export default function SectionHero() {
  return (
    <section aria-label="Section Hero">
      <div className="px-5 pt-8 pb-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-83.75 md:max-w-170 lg:max-w-280">
          <div className="flex flex-col items-start justify-start gap-10">
            <h1 className="text-preset-1 text-slate-base md:max-w-3/4">
              We make your music sound extraordinary
            </h1>
            <p className="text-preset-4 text-slate-base md:max-w-7/11">
              A system audio equalizer specifically designed for Android and
              iOS. Freely tune the way your music sounds with a professional
              grade parametric EQ & volume mixer. Control bass, mids, treble,
              gain control, reverb, and more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
