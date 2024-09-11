import { Button } from "@/components/ui/button";
import { Card, CardProps } from "@/components/ui/card";
import Link from "next/link";

type PortfolioProps = {
  portfolioItems: CardProps[];
};

function PortfolioContainer({ portfolioItems }: PortfolioProps) {
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
        <Button
          asChild
          className="rounded-full border-primary-600 text-primary-600"
          variant={"outline"}
        >
          <Link href={"/portfolio"}>Browse all</Link>
        </Button>
      </div>
      <div className="grid gap-8 md:grid-cols-2 mt-6">
        {portfolioItems.map((item, index) => (
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
    </section>
  );
}

export { PortfolioContainer };
