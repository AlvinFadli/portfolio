import Link from "next/link";

import { Card } from "@/components/ui/card";
import HomeButton from "@/components/home-button";

import { projectItems } from "@/data/project";

export default function ProjectPage() {
  return (
    <>
      <HomeButton />
      <section className="my-5">
        <div className="text-center md:text-left">
          <h2 className="font-bold text-2xl">Projects</h2>
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
              companyName={item.companyName}
              details={item.details}
              withCardDetail={true}
            />
          ))}
        </div>
      </section>
    </>
  );
}
