import { Container, Main, Section } from "@/components/craft";
import Hero from "@/components/home-page/hero";
import About from "@/components/home-page/about";
import ProjectShowcase from "@/components/home-page/project-showcase";
import BlogShowcase from "@/components/home-page/blog-showcase";
import CTA from "@/components/home-page/cta";

export default function HomePage() {
  return (
    <Main>
      <Section>
        <Container>
          <Hero />
          <About />
          <ProjectShowcase />
          {/* <BlogShowcase /> */}
          <CTA />
        </Container>
      </Section>
    </Main>
  );
}
