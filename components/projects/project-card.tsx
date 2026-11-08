import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 w-full bg-background border border-border rounded-lg h-full flex flex-col">
      <div className="relative w-full h-[200px] flex-shrink-0">
        <Image
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
        />
      </div>
      <div className="pt-5 space-y-3 flex flex-col flex-grow">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        {project.status && (
          <span className="w-fit rounded-full border border-[hsl(var(--palette-sand))] bg-[hsl(var(--palette-sand-soft))] px-3 py-1 text-xs font-medium text-primary">
            {project.status}
          </span>
        )}
        <p className="line-clamp-3 font-normal text-muted-foreground flex-grow">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <Link href={`/projects/${project.id}`}>
            <Button variant="default">
              Read more
              <Icons.chevronRight className="ml-1 w-4" />
            </Button>
          </Link>
          {project.githubLink && (
            <Button variant="outline" asChild>
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.gitHub className="mr-2 h-4 w-4" />
                Repository
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
