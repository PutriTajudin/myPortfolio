"use client";

import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import type { ExperienceInterface } from "@/config/experience";

const formatMonth = (date: Date): string =>
  new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(
    date
  );

const getDateRange = (experience: ExperienceInterface): string => {
  const start = formatMonth(experience.startDate);
  const end =
    experience.endDate === "Present"
      ? "Present"
      : formatMonth(experience.endDate);

  return start === end ? start : `${start} — ${end}`;
};

interface TimelineProps {
  experiences: ExperienceInterface[];
}

const Timeline = ({ experiences }: TimelineProps) => {
  const sortedExperiences = [...experiences].sort((a, b) => {
    return b.startDate.getTime() - a.startDate.getTime();
  });

  return (
    <div className="relative mx-auto max-w-5xl">
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-[0.625rem] top-2 border-l border-border md:left-[11.125rem]"
      />
      {sortedExperiences.map((experience, index) => (
        <AnimatedSection
          key={experience.id}
          delay={0.08 * (index + 1)}
          direction="up"
          className="relative grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4 pb-10 last:pb-0 md:grid-cols-[9rem_1.25rem_minmax(0,1fr)] md:gap-x-6"
        >
          <time className="hidden pt-1 text-right text-sm text-muted-foreground md:block">
            {getDateRange(experience)}
          </time>
          <div className="relative z-10 mt-1 flex justify-center">
            <span
              className={`experience-dot-${index % 3} h-3.5 w-3.5 rounded-full border-[3px] border-background ring-4 ring-background`}
            />
          </div>
          <article
            className={`experience-card experience-card-${index % 3} min-w-0 pb-8 ${
              index < sortedExperiences.length - 1
                ? "border-b border-border"
                : ""
            }`}
          >
            <time className="mb-2 block text-xs font-medium uppercase tracking-wide text-primary md:hidden">
              {getDateRange(experience)}
            </time>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-heading text-xl leading-tight sm:text-2xl">
                {experience.position}
              </h3>
              {experience.endDate === "Present" && (
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  Current
                </span>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              {experience.company}
              <span className="mx-2 text-border">/</span>
              {experience.location}
            </p>
            <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
              {experience.description[0]}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
            <Link
              href={`/experience/${experience.id}`}
              className="mt-4 inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Read role details
              <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Link>
          </article>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default Timeline;
