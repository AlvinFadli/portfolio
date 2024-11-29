import { Container, Main, Section } from "@/components/craft";
import Hero from "@/components/home-page/hero";

export default function HomePage() {
  return (
    <Main>
      <Section className="relative">
        <Container>
          <Hero />
        </Container>
      </Section>
    </Main>
  );
}
