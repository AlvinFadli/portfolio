import Link from "next/link";

import { Container, Section } from "@/components/craft";
import { Button } from "@/components/ui/button";

import { FaJava, FaLaravel, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiSpring } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SendIcon } from "lucide-react";

export default function Hero() {
  return (
    <Section className="relative min-h-dvh flex flex-col justify-center">
      <Container className="[&_span]:text-primary-500">
        <h2 className="font-extrabold text-3xl pb-2">Alvin Fadli Dwi Mulya</h2>
        <h2 className="text-2xl pb-3.5">
          Developing software to solve real-world challenges.
        </h2>

        <p className="text-base text-slate-600 dark:text-slate-200 mt-2">
          Currently working as a <span>Junior Software Engineer</span> at{" "}
          <span>
            <a
              href="https://alturian.co/"
              target="_blank"
              className="hover:underline underline-offset-4 hover:cursor-ne-resize"
              rel="noopener noreferrer"
            >
              Alturian
            </a>
          </span>
          . Previously worked at{" "}
          <span>
            <a
              href="https://equnix.asia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4 hover:cursor-ne-resize"
            >
              Equnix
            </a>
          </span>{" "}
          and{" "}
          <span>
            <a
              href="https://sagaratechnology.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4 hover:cursor-ne-resize"
            >
              Sagara Technology
            </a>
          </span>
          . Proficient in fullstack development.
        </p>
        <p className="text-base text-slate-600 dark:text-slate-200 mt-2 mb-8">
          Book my{" "}
          <span>
            <a
              href="http://cal.com/alvinfadli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4 hover:cursor-ne-resize"
            >
              calendar
            </a>
          </span>{" "}
          or email me at{" "}
          <span>
            <a
              href="mailto:alvinfdl21@gmail.com"
              className="hover:underline underline-offset-4 hover:cursor-ne-resize"
            >
              alvinfdl21@gmail.com
            </a>
          </span>
        </p>
        <div className="mt-3">
          <div className="flex items-center gap-4">
            <FaReact className="text-slate-600 dark:text-slate-300" size={26} />
            <SiNextdotjs
              className="text-slate-600 dark:text-slate-300"
              size={26}
            />
            <BiLogoTypescript
              className="text-slate-600 dark:text-slate-300"
              size={32}
            />
            <FaJava className="text-slate-600 dark:text-slate-300" size={26} />
            <FaLaravel
              className="text-slate-600 dark:text-slate-300"
              size={26}
            />
            <SiSpring
              className="text-slate-600 dark:text-slate-300"
              size={26}
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="mt-4">
            <Button asChild className="dark:text-white dark:hover:text-black">
              <Link href="/about" className="hover:cursor-pointer">
                <SendIcon className="mr-2 h-4 w-4 " />
                Learn more
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
