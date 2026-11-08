import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import Timeline from "@/components/experience/timeline";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { certificates } from "@/config/certificates";
import { Projects } from "@/config/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Information Engineering Student",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <section className="portfolio-hero relative overflow-hidden">
        <div className="container grid min-h-[calc(100svh-5rem)] max-w-6xl items-center gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-20">
          <div className="order-2 space-y-7 md:order-1">
            <AnimatedText
              as="p"
              delay={0.1}
              className="inline-flex rounded-full border border-[hsl(var(--palette-sand))] bg-[hsl(var(--palette-sand-soft))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm"
            >
              Information Engineering · Universitas Gadjah Mada
            </AnimatedText>
            <AnimatedText
              as="h1"
              delay={0.2}
              className="max-w-2xl font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
            >
              Putri Tajudin
            </AnimatedText>
            <AnimatedText
              as="h2"
              delay={0.3}
              className="text-xl font-medium text-muted-foreground sm:text-2xl"
            >
              Data, technology & people-first collaboration.
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={0.4}
              className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
            >
              An Information Engineering undergraduate at Universitas Gadjah
              Mada exploring data analysis and technology, with experience in
              event coordination, participant communication, and digital
              content.
            </AnimatedText>
            <AnimatedText
              delay={0.5}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                href="/projects"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Explore projects
                <Icons.arrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/resume"
                target="_blank"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                aria-label="View resume"
              >
                <Icons.post className="mr-2 h-4 w-4" />
                View CV
              </Link>
            </AnimatedText>
            <AnimatedText
              delay={0.6}
              className="flex flex-wrap items-center gap-5 pt-2 text-sm text-muted-foreground"
            >
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Icons.linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={siteConfig.links.email}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Icons.gmail className="h-4 w-4" />
                Email
              </a>
            </AnimatedText>
          </div>
          <AnimatedSection
            direction="up"
            delay={0.25}
            className="hero-portrait order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-none"
          >
            <div className="hero-photo relative mx-auto aspect-[4/5] w-full max-w-[26rem] overflow-hidden rounded-[2rem] bg-muted md:rotate-2">
              <Image
                src="/foto_profile.jpg"
                alt="Putri Tajudin"
                fill
                sizes="(max-width: 768px) 80vw, 420px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20 text-white">
                <p className="text-sm font-medium tracking-wide">
                  Yogyakarta, Indonesia
                </p>
              </div>
            </div>
            <span className="hero-sticker absolute -left-2 top-8 rounded-full bg-[hsl(var(--palette-clay))] px-4 py-2 text-xs font-semibold text-[hsl(var(--background))] sm:left-0 md:-left-5">
              People first
            </span>
            <span className="hero-sticker absolute -bottom-2 right-0 rounded-full bg-[hsl(var(--palette-sand))] px-4 py-2 text-xs font-semibold text-[hsl(var(--foreground))] sm:right-2 md:-right-4">
              Tech curious
            </span>
          </AnimatedSection>
        </div>
      </section>
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Projects
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Selected data and technology projects.
          </AnimatedText>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant="outline" className="rounded-xl">
              View All Projects
              <Icons.chevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <Timeline
          experiences={[...experiences]
            .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
            .slice(0, 3)}
        />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="certificate-showcase container space-y-6 px-5 py-10 my-14 sm:px-8"
        id="certificates"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            Coursework & Certificates
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Technical courses completed alongside my university studies.
          </AnimatedText>
        </div>
        <div className="mx-auto grid max-w-5xl gap-3 md:grid-cols-3">
          {certificates.slice(0, 3).map((certificate, index) => (
            <AnimatedSection
              key={certificate.file}
              delay={0.1 * (index + 1)}
              direction="up"
              className="h-full"
            >
              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className={`certificate-card certificate-card-${index % 3} group flex h-full flex-col justify-between gap-5 rounded-xl border bg-background p-5 transition-colors hover:bg-muted/50`}
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {certificate.issuer}
                  </p>
                  <h3 className="mt-3 font-heading text-lg leading-snug">
                    {certificate.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  View certificate
                  <Icons.externalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/certificates">
            <Button variant="outline" className="rounded-xl">
              See all certificates
              <Icons.chevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="skill-showcase container space-y-6 px-5 py-10 my-14 sm:px-8"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
