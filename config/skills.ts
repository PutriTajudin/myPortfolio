import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description: "Programming language for scripting and software development.",
    icon: Icons.python,
  },
  {
    name: "SQL",
    description: "Query and manage data in relational databases.",
    icon: Icons.database,
  },
  {
    name: "C++",
    description: "General-purpose programming language.",
    icon: Icons.cpp,
  },
  {
    name: "C#",
    description: "Programming language in the .NET ecosystem.",
    icon: Icons.csharp,
  },
  {
    name: "Git & GitHub",
    description: "Version control and collaborative code hosting.",
    icon: Icons.git,
  },
];

export const skills = skillsUnsorted;

export const featuredSkills = skills.slice(0, 6);
