import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { FaJava, FaLaravel, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiSpring } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { PaperclipIcon, SendIcon } from "lucide-react";

import { Poor_Story } from "next/font/google";
import { projectItems } from "@/data/project";

const poorStory = Poor_Story({ weight: "400", subsets: ["latin"] });

export default function HomePage() {
  const showcaseProjectItems = projectItems.slice(0, 2);

  return (
    <>
      <section className="mt-14 mb-10 flex flex-col justify-center w-5/6">
        <h2 className="font-bold text-4xl">
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
                "https://drive.google.com/file/d/1qFvdLDP_yrS5Cwipf-FngezYO4iCom4b/view?usp=sharing"
              }
              target="_blank"
            >
              <PaperclipIcon className="mr-2 h-4 w-4" />
              My Resume
            </Link>
          </Button>
        </div>
      </section>
      <section
        className="flex flex-col-reverse md:flex-row pt-5 mb-10"
        id="about"
      >
        <div className="w-full md:w-7/12">
          <h2 className="font-bold text-2xl">Know more About Me!</h2>
          <div className="text-base space-y-3 mt-4 text-slate-600">
            <p>
              My name is{" "}
              <span className="font-semibold">Alvin Fadli Dwi Mulya</span>.
              I&apos;m a fresh graduate with Software Engineering degree,
              I&apos;ve several internship experience with various companies and
              organizations.
            </p>
            <p>
              I love collaborating with individuals to create useful digital
              products while leveraging the best practices and technologies.
            </p>
            <p>
              In my free time, you&apos;ll usually find me building side
              projects and tackling web development challenges to enhance my
              skills.
            </p>
          </div>
          <div className="mt-4">
            <Button asChild>
              <Link href="/about">
                <SendIcon className="mr-2 h-4 w-4" />
                Learn more
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full md:w-5/12 mb-10 md:mb-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-[#dddd2a] to-[#fefe5f] rounded-full opacity-40 filter blur-3xl animate-move animate-colorChange"></div>
          <div className="relative ml-10 md:mx-auto -rotate-6 z-10 bg-white shadow-md border w-[190px] h-[232px]">
            <div className="w-full h-full p-1.5 pb-10">
              <div className="w-full h-full">
                <Image
                  src={"/images/profile-square.jpeg"}
                  alt="profile"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <p className={poorStory.className}>My potrait</p>
            </div>
          </div>
          <div className="relative mx-auto -mt-10 mr-10 md:-mr-5 z-0 rotate-6 bg-white shadow-md border w-[190px] h-[175px]">
            <div className="w-full h-full p-1.5 pb-10">
              <div className="w-full h-full bg-green-200">
                <Image
                  src={"/images/cat-image.jpg"}
                  alt="profile"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <p className={poorStory.className}>Fixing bugs!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5" id="portfolio">
        <div className="flex justify-between gap-10 items-center">
          <div>
            <h2 className="font-bold text-2xl">Featured Projects</h2>
            <p className="text-slate-500">
              Sharing projects that highlight my learning and focus on creating
              useful solutions.
            </p>
          </div>
          <Button asChild variant={"secondary"}>
            <Link href={"/project"}>Browse all</Link>
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 mt-6">
          {showcaseProjectItems.map((item, index) => (
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
