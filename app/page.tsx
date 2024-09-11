import {
  AboutSection,
  HeroSection,
  PortfolioSection,
} from "@/components/section";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />

        <div className="mt-24">
          <h2 className="text-4xl font-semibold w-full md:w-10/12">
            Thanks for visiting my website, Connect with me on LinkedIn{" "}
            <span className="inline-block -mb-1">
              <Link
                href={"https://www.linkedin.com/in/alvinfadli/"}
                target="_blank"
                className="group"
              >
                <FaLinkedin
                  size={35}
                  className="group-hover:text-primary-600"
                />
              </Link>
            </span>{" "}
            and check my code on GitHub{" "}
            <span className="inline-block -mb-1">
              <Link
                href={"https://github.com/alvinfadli"}
                target="_blank"
                className="group"
              >
                <FaGithub size={35} className="group-hover:text-primary-600" />
              </Link>
            </span>
          </h2>
          <Button
            className="mt-4 rounded-full bg-primary-600 text-lg px-5 py-5"
            asChild
          >
            <Link href={"mailto:alvinfdl21@gmail.com"}>
              <MailIcon className="mr-2 h-5 w-5" />
              Get in touch
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
