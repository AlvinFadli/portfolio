import Image from "next/image";
import Link from "next/link";
import { Poor_Story } from "next/font/google";

// local component imports
import { Container, Section } from "@/components/craft";
import { Button } from "@/components/ui/button";

// icon imports
import { SendIcon } from "lucide-react";

const poorStory = Poor_Story({ weight: "400", subsets: ["latin"] });

export default function About() {
  return (
    <Section>
      <Container className="flex flex-col-reverse md:flex-row pt-5 mb-10">
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
      </Container>
    </Section>
  );
}
