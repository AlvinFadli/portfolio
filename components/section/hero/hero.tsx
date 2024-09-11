import { FaJava, FaLaravel, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiSpring } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { MailIcon } from "lucide-react";
import { Button } from "../../ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="mt-14 mb-10 flex flex-col justify-center w-5/6">
      <h2 className="font-bold text-4xl">
        Developing innovative digital solutions to address real-world
        challenges.
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
        <Button className="bg-primary-600 rounded-full text-white" asChild>
          <Link href={"mailto:alvinfdl21@gmail.com"}>
            <MailIcon className="mr-2 h-4 w-4" />
            Reach out via email
          </Link>
        </Button>
      </div>
    </section>
  );
}

export { HeroSection };
