"use client";
import { useRouter } from "next/navigation";
import { PortfolioContainer } from "./portfolio-container";

function PortfolioSection() {
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
  ];

  return <PortfolioContainer portfolioItems={portfolioItems} />;
}

export { PortfolioSection };
