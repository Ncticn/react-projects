interface CardSkillProps {
    title: string,
    description: string
}

export default function CardSkill({ title, description }: CardSkillProps) {
    return (
        <div className="card-skill space-y-px md:space-y-3.5 text-center md:text-start w-full h-auto">
            <h2 className="text-base-white text-heading-l">{title}</h2>
            <p className="text-base-grey text-body">{description}</p>
        </div>
    );
}