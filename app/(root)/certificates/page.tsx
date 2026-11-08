import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { certificates } from "@/config/certificates";
import { pagesConfig } from "@/config/pages";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.certificates.metadata.title,
  description: pagesConfig.certificates.metadata.description,
};

export default function CertificatesPage() {
  return (
    <PageContainer
      title={pagesConfig.certificates.title}
      description={pagesConfig.certificates.description}
    >
      <p className="mb-6 max-w-3xl text-sm leading-6 text-muted-foreground">
        These course certificates reflect technical learning completed
        alongside my university studies; they are not professional licenses.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {certificates.map((certificate) => (
          <article
            key={certificate.file}
            className="flex h-full flex-col justify-between gap-6 rounded-xl border bg-background p-5 transition-colors hover:bg-muted/40 sm:p-6"
          >
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icons.post className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {certificate.issuer}
                </p>
                <h2 className="mt-2 font-heading text-lg leading-snug sm:text-xl">
                  {certificate.title}
                </h2>
              </div>
            </div>
            <a
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${certificate.title} certificate from ${certificate.issuer}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "w-fit gap-2"
              )}
            >
              View certificate
              <Icons.externalLink className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </PageContainer>
  );
}
