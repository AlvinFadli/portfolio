import { Button } from "@/components/ui/button";
import { MailIcon, PaperclipIcon } from "lucide-react";
import Link from "next/link";
import { WorkExperience } from "@/data/work";
import Image from "next/image";
import { Container, Main, Section } from "@/components/craft";

export default function AboutPage() {
  const reversedWorkExperience = WorkExperience.reverse();
  return (
    <Main>
      <Section>
        <Container>
          <Container id="content">
            <div>
              <div className="w-full lg:w-3/5 text-center md:text-left">
                <h2 className="font-bold text-4xl [&>span]:text-primary-600 ">
                  About me, my <span>story</span> and my <span>experience</span>
                </h2>
              </div>
              <div className="flex flex-col md:flex-row gap-10 mt-10">
                <div className="w-5/6 md:w-2/5 mx-auto h-60 rounded-lg">
                  <Image
                    src={"/images/about/profile-2.webp"}
                    alt="Profile"
                    className="object-cover w-full h-full rounded-xl"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-5 justify-center text-center md:text-left">
                  <p className="text-pretty text-slate-600">
                    As a software engineer with one year of experience. I
                    specialize in creating amazing website with modern
                    technologies.
                  </p>
                  <div>
                    <Button asChild>
                      <Link href={"mailto:alvinfdl21@gmail.com"}>
                        <MailIcon className="mr-2 h-4 w-4" />
                        Get in touch
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-pretty space-y-3">
                <p className="">
                  My name is{" "}
                  <span className="text-primary-600">
                    Alvin Fadli Dwi Mulya
                  </span>
                  . I&apos;m a{" "}
                  <span className="text-primary-600">software engineer</span>{" "}
                  with a passion for software development. I enjoy working with
                  any programming language, but some of my favorites are{" "}
                  <span className="text-primary-600">
                    Java, JavaScript, Go, Python, and PHP
                  </span>
                  .
                </p>
                <p className="">
                  I completed my studies in{" "}
                  <span className="text-primary-600">
                    Software Engineering Technology
                  </span>{" "}
                  at{" "}
                  <span className="text-primary-600">
                    Padang State Polytechnic
                  </span>{" "}
                  and was recognized as the{" "}
                  <span className="text-primary-600">
                    Most Outstanding Student
                  </span>{" "}
                  of the IT Department 2022.
                </p>
                <p className="">
                  I previously worked as{" "}
                  <span className="text-primary-600">
                    Software Engineer Intern
                  </span>{" "}
                  at <span className="text-primary-600">Sagara Technology</span>{" "}
                  and{" "}
                  <span className="text-primary-600">
                    Equnix Business Solutions
                  </span>{" "}
                  focusing on research and developments of their digital
                  products. I gained a lot of experience both on soft skills and
                  hard skills. Currently, I&apos;m working as a part-time{" "}
                  <span className="text-primary-600">
                    Associate Software Engineer
                  </span>{" "}
                  at <span className="text-primary-600">Magna Partners</span>.
                </p>
                <p className="">
                  I&apos;m motivated by a desire to{" "}
                  <span className="text-primary-600">learn and grow</span>, and
                  I&apos;m always looking for new opportunities to apply my
                  skills in meaningful ways. I&apos;m fluent in both{" "}
                  <span className="text-primary-600">Indonesian</span> and{" "}
                  <span className="text-primary-600">English</span>, which helps
                  me collaborate effectively in diverse teams.
                </p>
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
            </div>
          </Container>
          <Container>
            <div className="w-full md:w-[calc(100%+8rem)] md:-mx-16 mx-auto my-14 md:my-24 ">
              <div className="flex flex-col md:flex-row w-full mx-auto items-center">
                <div className="w-4/5 md:w-3/5 shadow-sm h-60 rounded-lg -rotate-6 md:-mr-10">
                  <Image
                    src={"/images/about/henkel.webp"}
                    alt="Profile"
                    className="object-cover w-full h-full rounded-xl"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="w-4/5 md:w-3/5 shadow-sm h-60 rounded-lg md:-mt-10 rotate-3">
                  <Image
                    src={"/images/about/indonesiannight.webp"}
                    alt="Profile"
                    className="object-cover w-full h-full rounded-xl"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="w-4/5 md:w-3/5 shadow-sm h-60 rounded-lg -rotate-6 md:-ml-10 md:mt-10">
                  <Image
                    src={"/images/about/techbros.webp"}
                    alt="Profile"
                    className="object-cover w-full h-full rounded-xl"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </Container>
          <Container>
            <div className="flex flex-col lg:flex-row gap-5 mt-8">
              <p className="font-bold text-2xl w-2/5">Work Experience</p>
              <div className="flex-1 flex flex-col space-y-4 divide-y">
                {reversedWorkExperience.map((item, index) => (
                  <div
                    className={`flex flex-col md:flex-row justify-between ${
                      index > 0 ? `pt-4` : `pt-0`
                    }`}
                    key={index}
                  >
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="text-sm">{item.company}</p>
                    </div>
                    <div className="flex justify-end items-end">
                      <p className="text-sm">{item.timespan}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Container>
      </Section>
    </Main>
  );
}
