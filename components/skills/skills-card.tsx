import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className={`skill-card skill-card-${id % 5} relative overflow-hidden border p-2`}
        >
          <div className="flex h-[230px] flex-col justify-between rounded-md p-6 sm:h-[230px]">
            <div className="skill-icon">
              <skill.icon size={34} />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
