// NextJS
import { StaticImageData } from "next/image";

// Components
import ButtonLink from "../ui/ButtonLink";
import CardProject from "../ui/CardProject";

// Props
interface SectionProjectsProps {
    projectsList: {
        title: string,
        skills: string[],
        codeURL: string,
        demoURL: string,
        thumbnail: {
            name: string,
            src: string | StaticImageData
        }
    }[]
}


export default function SectionProjects({ projectsList }: SectionProjectsProps) {
    return (
        <section aria-label="section-projects" id="sectionmyprojects">
            <div className="mx-auto max-w-85.75 md:max-w-177 lg:max-w-277.5">
                <div className="flex flex-col items-center justify-center gap-10 md:gap-15 lg:gap-20">
                    <div className="flex flex-row items-center justify-between gap-0 w-full">
                        <h2 className="text-heading-xl text-base-white">Projects</h2>
                        <ButtonLink text="Contact Me" url="#" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[repeat(2,342px)] lg:grid-cols-[repeat(2,540px)] gap-x-0 gap-y-10 md:gap-x-5.5 md:gap-y-15 lg:gap-x-7.5 lg:gap-y-17.25">
                        {
                            projectsList.map((project, index) => <CardProject key={index} {...project} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}