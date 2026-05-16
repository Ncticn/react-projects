interface CardSkillProps {
  title: string;
  description: string;
}

export default function CardSkill({ title, description }: CardSkillProps) {
  return (
    <div className="card-skill h-auto w-full space-y-px text-center md:space-y-3.5 md:text-start">
      <h2 className="text-base-white text-heading-l">{title}</h2>
      <p className="text-base-grey text-body">{description}</p>
    </div>
  );
}
