// NextJS
import Image from "next/image";

// Images
import SectionImage from "@/src/assets/images/image-man-eating.webp"
import PatternCurvedLineLeft from "@/src/assets/patterns/pattern-curved-line-left.svg"

export default function SectionAbout() {
    return (
        <section aria-label="Section About" className="lg:pb-36 relative overflow-hidden">
            <div className="mx-auto max-w-full md:max-w-290 not-lg:md:-translate-x-20">
                <div className="flex flex-col md:flex-row items-end justify-between gap-12 md:gap-18 lg:relative lg:overflow-hidden">
                    <div className="min-w-full md:min-w-108.75 lg:min-w-141 shrink">
                        <Image src={SectionImage} alt="" loading="eager" placeholder="blur" />
                    </div>

                    <div className="hidden lg:inline-block lg:absolute lg:right-6 lg:top-0">
                        <Image src={PatternCurvedLineLeft} alt="" loading="eager" />
                    </div>
                    <div className="space-y-8 px-6 md:px-0 md:w-82.75 lg:w-116.25 flex-none pb-8">
                        <h2 className="text-preset-2 text-blue-900">What your BMI result means</h2>
                        <p className="text-grey-500 text-preset-6 font-normal text-start text-pretty">A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}