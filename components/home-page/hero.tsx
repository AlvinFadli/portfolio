// next.js imports
import Link from "next/link";

// local component imports
import { Container, Section } from "@/components/craft";
import { Button } from "@/components/ui/button";

// icon imports
import { FaJava, FaLaravel, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiSpring } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { PaperclipIcon } from "lucide-react";

export default function Hero() {
  return (
    <Section>
      <Container>
        <h2 className="font-bold text-4xl md:w-3/4">
          Developing software to solve{" "}
          <span className="inline-block">real-world</span> challenges.
        </h2>

        <p className="text-lg text-slate-600 mt-2">
          I&apos;m a software engineer based in Indonesia. Currently seeking
          software engineering roles.
        </p>
        <div className="mt-3">
          <div className="flex items-center gap-4">
            <FaReact color="#475569" size={26} />
            <SiNextdotjs color="#475569" size={26} />
            <BiLogoTypescript color="#475569" size={32} />
            <FaJava color="#475569" size={26} />
            <FaLaravel color="#475569" size={26} />
            <SiSpring color="#475569" size={26} />
          </div>
        </div>
        <div className="mt-5">
          <Button asChild>
            <Link
              href={
                "https://drive.google.com/file/d/1KJ7OuRJXEiQpFCBeDgUjnfYiIw1QT1xb/view?usp=sharing"
              }
              target="_blank"
            >
              <PaperclipIcon className="mr-2 h-4 w-4" />
              My Resume
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
