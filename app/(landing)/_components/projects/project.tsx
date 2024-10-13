"use client";
import { ProjectContainer } from "./project-container";

function ProjectSection() {
  const projectItems = [
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
      banner: "/images/portfolio/si-library.png",
      title: "Library Information System",
      description:
        "A web application for managing library information, built using Laravel and MySQL.",
      alt: "Library Information System",
      buttonLink: "https://github.com/alvinfadli/si-perpustakaan",
      companyName: "Personal",
      buttonLabel: "Code",
      details: "PHP, Laravel, MySQL",
    },
  ];

  return <ProjectContainer projectItems={projectItems} />;
}

export { ProjectSection };
