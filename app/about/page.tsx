import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container, Main, Section } from "@/components/craft";
import HomeButton from "@/components/home-button";
import Footer from "@/components/layout/footer";

import { PaperclipIcon } from "lucide-react";
import { Poor_Story } from "next/font/google";
import RevealComponent from "@/components/reveal";
import { getBase64 } from "@/lib/getBase64";

const poorStory = Poor_Story({ weight: "400", subsets: ["latin"] });

const AboutPage = async () => {
  const blurDataURL = await getBase64("images/about/profile-2.webp");

  return (
    <Main>
      <Section>
        <Container className="relative">
          <RevealComponent>
            <Container className="mb-6 pt-12">
              <HomeButton />
            </Container>
          </RevealComponent>
          <Container id="content">
            <div>
              <RevealComponent>
                <div className="w-full lg:w-3/5 text-center md:text-left">
                  <h2 className="font-bold text-4xl [&>span]:text-primary-600 ">
                    About me, my <span>story</span> and my{" "}
                    <span>experience</span>
                  </h2>
                </div>
                <div className="mt-8 text-pretty space-y-3">
                  <div className="w-4/5 sm:w-3/5 md:w-2/5 mx-auto md:float-right px-2 pt-2 pb-10 bg-slate-50 rounded-sm -rotate-3 md:ml-5 mb-10 border shadow-md">
                    <Image
                      src={"/images/about/profile-2.webp"}
                      alt="Profile"
                      className="object-cover w-full h-full rounded-t-sm"
                      width={500}
                      height={500}
                      priority={true}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-slate-800">
                      <p className={poorStory.className}>Me!</p>
                    </div>
                    {/* </div> */}
                  </div>
                  <p className="">
                    My name is{" "}
                    <span className="text-primary-600">
                      Alvin Fadli Dwi Mulya
                    </span>
                    . I&apos;m a{" "}
                    <span className="text-primary-600">software engineer</span>{" "}
                    with a passion for software development. I enjoy working
                    with any programming language, but some of my favorites are{" "}
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
                    at{" "}
                    <span className="text-primary-600">Sagara Technology</span>{" "}
                    and{" "}
                    <span className="text-primary-600">
                      Equnix Business Solutions
                    </span>{" "}
                    focusing on research and developments of their digital
                    products. I also worked as a part-time{" "}
                    <span className="text-primary-600">
                      Associate Software Engineer
                    </span>{" "}
                    at <span className="text-primary-600">Magna Partners</span>,
                    where I contributed to a variety of education-focused
                    projects. Currently, I&apos;m working as a{" "}
                    <span className="text-primary-600">
                      Junior Software Engineer
                    </span>{" "}
                    at <span className="text-primary-600">Alturian</span> and
                    part-time{" "}
                    <span className="text-primary-600">
                      Associate Software Engineer
                    </span>{" "}
                    at <span className="text-primary-600">Magna Partners</span>.
                  </p>
                  <p className="">
                    I&apos;m motivated by a desire to{" "}
                    <span className="text-primary-600">learn and grow</span>,
                    and I&apos;m always looking for new opportunities to apply
                    my skills in meaningful ways. I&apos;m fluent in both{" "}
                    <span className="text-primary-600">Indonesian</span> and{" "}
                    <span className="text-primary-600">English</span>, which
                    helps me collaborate effectively in diverse teams.
                  </p>
                  <Button disabled>
                    <PaperclipIcon className="mr-2 h-4 w-4" />
                    My Resume
                  </Button>
                </div>
              </RevealComponent>
            </div>
          </Container>
          <Container>
            <RevealComponent>
              <Footer />
            </RevealComponent>
          </Container>
        </Container>
      </Section>
    </Main>
  );
};

export default AboutPage;
