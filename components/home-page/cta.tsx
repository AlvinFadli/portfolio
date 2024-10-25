import Link from "next/link";

// local component imports
import { Button } from "@/components/ui/button";

// icon imports
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MailIcon } from "lucide-react";
import { Container } from "../craft";

export default function CTA() {
  return (
    <Container>
      <h2 className="text-4xl font-semibold w-full md:w-10/12 mt-10">
        Thanks for visiting my website, Connect with me on LinkedIn{" "}
        <span className="inline-block -mb-1">
          <Link
            href={"https://www.linkedin.com/in/alvinfadli/"}
            target="_blank"
            className="group"
          >
            <FaLinkedin size={35} className="group-hover:text-primary-600" />
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
      <Button className="mt-4" asChild>
        <Link href={"mailto:alvinfdl21@gmail.com"}>
          <MailIcon className="mr-2 h-4 w-4" />
          Get in touch
        </Link>
      </Button>
    </Container>
  );
}
