"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of California, Riverside</li>
        <br/>
        <li>GPA: 3.71</li>
        <li>Year: Senior</li>
        <li>Major: Computer Science with Business Applications</li>
      </ul>
    ),
  },
  {
    title: "Frontend Skills",
    id: "frontend-skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>React Native</li>
        <li>Next.js</li>
        <li>TailwindCSS</li>
        <li>HTML & CSS</li>
      </ul>
    ),
  },
  {
    title: "Backend Skills",
    id: "backend-skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>GraphQL</li>
        <li>Firebase</li>
        <li>Git/GitHub</li>
        <li>Prettier & ESLint</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("frontend-skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/About-me-image-deux.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate and driven full-stack web developer with a strong focus on creating seamless,
            user-friendly applications. I have experience in React Native, GraphQL, Next.js, TailwindCSS, and 
            Firebase. <br/> <br/> I thrive in collaborative settings, leading teams through projects,
            such as building websites for clients and improving user engagement through thoughtful design.
            I’m always excited to take on new challenges and push my technical skills, especially 
            in dynamic, fast-paced environments.
          </p>
          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frontend-skills")}
              active={tab === "frontend-skills"}
            >
              {" "}
              Frontend Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("backend-skills")}
              active={tab === "backend-skills"}
            >
              {" "}
              Backend Skills{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
