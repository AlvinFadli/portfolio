"use client";
import { useRouter } from "next/navigation";
import { PortfolioContainer } from "./portfolio-container";
import { PortfolioDetailContainer } from "./portfolio-detail-container";

function PortfolioDetailSection() {
  const router = useRouter();

  const portfolioItems = [
    {
      banner: "/images/portfolio/tekinfo-bot.png",
      title: "Tekinfo-Bot",
      description:
        "RAG Chatbot using Llama 3 for Information Technology Department of Padang State Polytechnic.",
      alt: "Tekinfo-Bot",
      buttonLink: "https://alvinfadli-tekinfo-bot-hf.hf.space/",
      buttonSecondaryLink: "https://github.com/alvinfadli/tekinfo-bot",
      companyName: "Personal",
      buttonLabel: "Visit",
      buttonSecondaryLabel: "Code",
      details: "Next.js, Python, Llama3",
    },
    {
      banner: "/images/portfolio/sibi-signs.png",
      title: "Sibi Signs",
      description:
        "Web Application utilizing Machine Learning to classify Indonesian SIBI-styled sign language.",
      alt: "Sibi Signs",
      buttonLink: "https://github.com/alvinfadli/sibi-sign/",
      companyName: "Personal",
      buttonLabel: "Code",
      details: "Python, Flask, OpenCV",
    },
    {
      banner: "/images/portfolio/magna-website.png",
      title: "Magna Partners's Website",
      description:
        "Developed a Magna's company website, Contributing as a Frontend Developer.",
      alt: "Magna Partners's Website",
      buttonLink: "https://magnapartners.org/",
      companyName: "Magna Partners",
      buttonLabel: "Preview",
      details: "Typescript, Next.js",
    },
  ];

  return <PortfolioDetailContainer portfolioItems={portfolioItems} />;
}

export { PortfolioDetailSection };
