import { Button } from "@/components/ui/button";
import { Card, CardProps } from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

type portfolioDetailProps = {
  portfolioItems: CardProps[];
};

function PortfolioDetailContainer({ portfolioItems }: portfolioDetailProps) {
  return (
    <>
      <div>
        <Button variant={"ghost"} asChild>
          <Link href={"/"}>
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </Button>
      </div>
      <section className="my-5">
        <div className="text-center">
          <h2 className="font-bold text-2xl">Portfolio</h2>
          <p className="text-slate-500">
            Sharing projects that highlight my learning and focus on creating
            useful solutions.
          </p>
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
    </>
  );
}

export { PortfolioDetailContainer };
