import Link from "next/link";

// local component imports
import { Container, Section } from "@/components/craft";
import { Button } from "../ui/button";

export default function BlogShowcase() {
  return (
    <Section>
      <Container>
        <div className="flex justify-between gap-10 items-center">
          <div>
            <h2 className="font-bold text-2xl">From the blog</h2>
            <p className="text-slate-500">
              Sharing thoughts, notes, and reflections as a software engineer.
            </p>
          </div>
          <Button asChild variant={"secondary"}>
            <Link href={"/project"}>Browse all</Link>
          </Button>
        </div>
        <div className="grid gap-4 mt-6">{/* <BlogCard /> */}</div>
      </Container>
    </Section>
  );
}
