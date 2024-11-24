"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Website to display my achievments and projects in CS !",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Highlander League Gaming Website",
    description: "Promote and involve campus and surrounding areas in esports and the gaming industry",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/acm-ucr/hlg-website",
    previewUrl: "https://hlg.ucrhighlanders.org/",
  },
  {
    id: 3,
    title: "South Asian Federation Website",
    description: "Culturally, politically, and socially uniting the South Asian student population at UC Riverside!",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/acm-ucr/saf-website",
    previewUrl: "https://saf.ucrhighlanders.org/",
  },
  {
    id: 4,
    title: "Vex Robotics Website",
    description: "An official UCR Robotics Club specialized in furthering engineering knowledge and excellence in the field of robotics!",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/acm-ucr/vex-robotics-website",
    previewUrl: "https://vexrobotics.ucrhighlanders.org/",
  },
  {
    id: 5,
    title: "J&M Products Website",
    description: "The industry leader in Line Support Clamps & Wire Harnesses",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/acm-ucr/jm-products-website?tab=readme-ov-file",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Skate Club Website",
    description: "Skate Club is an inclusive community for every student. No Skateboard needed to join !",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/acm-ucr/skate-club-website",
    previewUrl: "https://acm-ucr.github.io/skate-club-website/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
