
// NextJS
import Image from "next/image";

// Components
import CardLimitation from "../ui/CardLimitation";

// Icons
import IconGender from "@/src/assets/icons/icon-gender.svg";
import IconAge from "@/src/assets/icons/icon-age.svg";
import IconMuscle from "@/src/assets/icons/icon-muscle.svg";
import IconPregnancy from "@/src/assets/icons/icon-pregnancy.svg";
import IconRace from "@/src/assets/icons/icon-race.svg";

// Patterns
import PatternCurvedLineRight from "@/src/assets/patterns/pattern-curved-line-right.svg";



export default function SectionLimitations() {
    const limitations = [
        {
            id: 1,
            icon: IconGender,
            title: "Gender",
            description: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
        },
        {
            id: 2,
            icon: IconAge,
            title: "Age",
            description: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
        },
        {
            id: 3,
            icon: IconMuscle,
            title: "Muscle",
            description: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
        },
        {
            id: 4,
            icon: IconPregnancy,
            title: "Pregnancy",
            description: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
        },
        {
            id: 5,
            icon: IconRace,
            title: "Race",
            description: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
        }
    ];


    return (
        <section aria-label="Section Limitations of BMI" className="lg:px-36 lg:py-26">
            <div className="mx-auto max-w-81.75 md:max-w-171.5 lg:max-w-290 relative">
                <div className="flex flex-col lg:flex-row items-start justify-start gap-8">
                    <div className="text-center lg:text-start space-y-8 lg:max-w-141">
                        <h2 className="text-preset-2 text-blue-900">Limitations of BMI</h2>
                        <p className="text-preset-6 font-normal text-grey-500">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
                    </div>

                    <div className="lg:absolute lg:right-0 not-lg:hidden">
                        <div className="flex flex-col flex-wrap items-center justify-center gap-8 w-5xl">
                            <div className="w-full flex items-center justify-center pl-96">
                                <CardLimitation key={limitations[0].id} title={limitations[0].title} description={limitations[0].description} icon={limitations[0].icon} />
                            </div>
                            <div className="w-full flex flex-row items-center justify-end gap-8">
                                <CardLimitation key={limitations[1].id} title={limitations[1].title} description={limitations[1].description} icon={limitations[1].icon} />
                                <CardLimitation key={limitations[2].id} title={limitations[2].title} description={limitations[2].description} icon={limitations[2].icon} />
                            </div>
                            <div className="w-full flex flex-row items-center justify-start gap-8 ps-16">
                                <CardLimitation key={limitations[3].id} title={limitations[3].title} description={limitations[3].description} icon={limitations[3].icon} />
                                <CardLimitation key={limitations[4].id} title={limitations[4].title} description={limitations[4].description} icon={limitations[4].icon} />
                            </div>
                        </div>
                    </div>
                    <div className="not-lg:grid not-lg:grid-cols-1 not-lg:md:grid-cols-2 not-lg:items-stretch not-lg:justify-center not-lg:gap-8 lg:hidden">
                        {
                            limitations.map((limitation) =>
                                <div key={limitation.id} className="col-span-1 md:not-last:col-span-1 md:last:col-span-2 md:last:*:mx-auto">
                                    <CardLimitation {...limitation} />
                                </div>
                            )
                        }
                    </div>

                    <div className="not-lg:hidden lg:absolute lg:top-[115%] lg:left-[15%] lg:z-10">
                        <Image src={PatternCurvedLineRight} alt="" loading="eager" />
                    </div>
                </div>
            </div>
        </section>
    );
}

