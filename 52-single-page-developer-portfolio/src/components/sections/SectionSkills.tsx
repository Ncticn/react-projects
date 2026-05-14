// Components
import CardSkill from "../ui/CardSkill";

export default function SectionSkills() {
    const skills = [
        {
            title: "HTML",
            description: "4 Years Experience"
        },
        {
            title: "CSS",
            description: "4 Years Experience"
        },
        {
            title: "Javascript",
            description: "4 Years Experience"
        },
        {
            title: "Accessibility",
            description: "4 Years Experience"
        },
        {
            title: "React",
            description: "3 Years Experience"
        },
        {
            title: "Sass",
            description: "3 Years Experience"
        },
    ]

    return (
        <section aria-label="section-skills" id="sectionmyskills">
            <div className="md:pt-13 lg:pt-18 not-md:border-b not-md:py-10 border-t border-base-white">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-0 md:gap-x-2.25 md:gap-y-13 lg:gap-x-8.75 lg:gap-y-14.5 items-center justify-center">
                    {skills.map((skill, index) => (<CardSkill key={index} {...skill} />))}
                </div>
            </div>
        </section>
    );
}