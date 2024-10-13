import { Button } from "@/components/ui/button";
import { Card, CardProps } from "@/components/ui/card";
import Link from "next/link";

type ProjectProps = {
  projectItems: CardProps[];
};

function ProjectContainer({ projectItems }: ProjectProps) {
  return (
    <section className="pt-5" id="portfolio">
      <div className="flex justify-between gap-10 items-center">
        <div>
          <h2 className="font-bold text-2xl">Featured Projects</h2>
          <p className="text-slate-500">
            Sharing projects that highlight my learning and focus on creating
            useful solutions.
          </p>
        </div>
        <Button asChild variant={"secondary"}>
          <Link href={"/portfolio"}>Browse all</Link>
        </Button>
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
            companyName={item.companyName}
            details={item.details}
            withCardDetail={true}
          />
        ))}
      </div>
    </section>
  );
}

export { ProjectContainer };
