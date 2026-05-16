// React
import { ViewTransition } from "react";

// Components
import CardSkill from "../ui/CardSkill";

export default function SectionSkills() {
  const skills = [
    {
      title: "HTML",
      description: "4 Years Experience",
    },
    {
      title: "CSS",
      description: "4 Years Experience",
    },
    {
      title: "Javascript",
      description: "4 Years Experience",
    },
    {
      title: "Accessibility",
      description: "4 Years Experience",
    },
    {
      title: "React",
      description: "3 Years Experience",
    },
    {
      title: "Sass",
      description: "3 Years Experience",
    },
  ];

  return (
    <ViewTransition>
      <section aria-label="section-skills" id="sectionmyskills">
        <div className="mx-auto max-w-85.75 md:max-w-177 lg:max-w-277.5">
          <div className="border-base-white border-t not-md:border-b not-md:py-10 md:pt-13 lg:pt-18">
            <div className="grid items-center justify-center gap-x-0 gap-y-6 md:grid-cols-2 md:gap-x-2.25 md:gap-y-13 lg:grid-cols-3 lg:gap-x-8.75 lg:gap-y-14.5">
              {skills.map((skill, index) => (
                <CardSkill key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ViewTransition>
  );
}
