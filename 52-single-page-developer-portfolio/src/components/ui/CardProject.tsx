// NextJS
import Image, { StaticImageData } from "next/image";

// Components
import Tag from "./Tag";
import ButtonLink from "./ButtonLink";


interface CardProjectProps {
    thumbnail: {
        src: StaticImageData | string,
        name: string
    },
    title: string,
    skills: string[],
    demoURL: string,
    codeURL: string
}

export default function CardProject({ thumbnail, title, skills, demoURL, codeURL }: CardProjectProps) {
    return (
        <article aria-label="card-project" className="w-full max-w-135 flex flex-col items-start justify-start gap-5 relative group">
            <div className="card-project-image relative overflow-hidden">
                <Image src={thumbnail.src} alt={`Image ${thumbnail.name}`} loading="eager" />
                <div className="card-project-buttons not-lg:hidden absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:delay-75 group-hover:ease-linear">
                    <div className="flex flex-col items-center justify-center gap-12 w-full h-full">
                        <ButtonLink url={demoURL} text="VIEW PROJECT" />
                        <ButtonLink url={codeURL} text="VIEW CODE" />
                    </div>
                </div>
            </div>
            <div className="card-project-head space-y-1.75">
                <h3 className="text-base-white text-heading-m">
                    {title}
                </h3>
                <div className="flex flex-row flex-wrap items-center justify-start gap-x-4.5">
                    {
                        skills.map((skill, index) => <Tag text={skill} key={index} />)
                    }
                </div>
            </div>
            <div className="card-project-buttons space-x-7.5 lg:hidden">
                <ButtonLink url={demoURL} text="VIEW PROJECT" />
                <ButtonLink url={codeURL} text="VIEW CODE" />
            </div>
        </article>
    );
}