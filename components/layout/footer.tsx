import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <>
      <div className="mt-24">
        <h2 className="text-4xl font-semibold w-full md:w-10/12">
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
      </div>
      <div className="flex justify-between py-5 mt-20">
        <p className="text-sm text-slate-500">
          2024 &copy; Alvin Fadli Dwi Mulya
        </p>
        <p className="text-primary-600 text-sm font-semibold">
          Built from Indonesia
        </p>
      </div>
    </>
  );
}
