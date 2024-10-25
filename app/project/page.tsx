import Link from "next/link";

// local component imports
import { Card } from "@/components/ui/card";

// data imports
import { projectItems } from "@/data/project";
import { Container, Section } from "@/components/craft";

export default function ProjectPage() {
  return (
    <Section>
      <Container>
        <Container>
          <div className="text-center">
            <h2 className="font-bold text-3xl">Projects</h2>
            <p className="text-slate-500">
              Sharing projects that highlight my learning and focus on creating
              useful solutions. Explore more projects on{" "}
              <span>
                <Link
                  className="font-semibold text-primary-600"
                  href={"https://github.com/alvinfadli"}
                  target="_blank"
                >
                  Github
                </Link>
              </span>
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 mt-6">
            {projectItems.map((item, index) => (
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
      </Container>
    </Section>
  );
}
