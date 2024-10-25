import Link from "next/link";

// local component imports
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/craft";

// data imports
import { projectItems } from "@/data/project";

export default function ProjectShowcase() {
  const showcaseProjectItems = projectItems.slice(0, 2);
  return (
    <Section>
      <Container>
        <div className="flex justify-between gap-10 items-center">
          <div>
            <h2 className="font-bold text-2xl">Selected projects</h2>
            <p className="text-slate-500">
              Sharing projects that highlight my learning and focus on creating
              useful solutions.
            </p>
          </div>
          <Button asChild variant={"secondary"}>
            <Link href={"/project"}>Browse all</Link>
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 mt-6">
          {showcaseProjectItems.map((item, index) => (
            <Card
              key={index}
              banner={item.banner}
              alt={item.alt}
              title={item.title}
              description={item.description}
              buttonLink={item.buttonLink}
              buttonSecondaryLink={item.buttonSecondaryLink}
              companyName={item.companyName}
              details={item.details}
              withCardDetail={true}
              buttonSecondaryLabel={item.buttonSecondaryLabel}
              buttonLabel={item.buttonLabel}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
