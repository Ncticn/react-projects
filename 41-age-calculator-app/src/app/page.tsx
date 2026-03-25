import ButtonSubmit from "@/components/ButtonSubmit";
import CounterAge from "@/components/CounterAge";
import InputDay from "@/components/InputDay";
import InputMonth from "@/components/InputMonth";
import InputYear from "@/components/InputYear";

export default function Home() {
  return (
    <section aria-label="Age Counter App">
      <div className="mx-auto max-w-85.75 rounded-t-3xl rounded-tr-3xl rounded-br-[200px] bg-white px-6 py-12 md:max-w-171.5 md:px-14 md:py-14 lg:max-w-210">
        <div className="flex flex-col items-stretch justify-start gap-8 lg:gap-0">
          <form className="space-y-8 lg:space-y-0">
            <div className="grid w-full grid-cols-3 items-start justify-start gap-4 md:grid-cols-[repeat(3,170px)] md:gap-8 lg:grid-cols-[repeat(3,160px)]">
              <InputDay />
              <InputMonth />
              <InputYear />
            </div>
            <div className="relative flex w-full flex-row items-center justify-center gap-0 lg:justify-end">
              <div className="divider bg-grey-200 absolute z-0 h-px w-full"></div>
              <ButtonSubmit />
            </div>
          </form>
          <div className="w-full">
            <CounterAge />
          </div>
        </div>
      </div>
    </section>
  );
}
