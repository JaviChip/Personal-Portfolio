"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import HobbyCard from "./HobbyCard";

const projectsData = [
  {
    id: 1,
    title: "Denzel",
    image: "images/hobbies/Denzel.jpeg",
    tag: ["Concerts"],
  },
  {
    id: 2,
    title: "Yeat",
    image: "images/hobbies/YeatLAA.jpeg",
    tag: ["Concerts"],
  },
  {
    id: 3,
    title: "Yeat",
    image: "images/hobbies/yeatLA.jpeg",
    tag: ["Concerts"],


  },
  {
    id: 4,
    title: "Uzi and Yeat",
    image: "images/hobbies/uziyeat.jpeg",
    tag: ["Concerts"],


  },
  {
    id: 5,
    title: "Ski Mask",
    image: "images/hobbies/SkiUCR.jpeg",
    tag: ["Concerts"],


  },
  {
    id: 6,
    title: "Septembers Rich",
    image: "images/hobbies/Sep.jpeg",
    tag: ["Concerts"],


  },
  {
    id: 7,
    title: "Nav",
    image: "images/hobbies/nav.jpeg",
    tag: ["Concerts"],


  },
  {
    id: 8,
    title: "Lone",
    image: "images/hobbies/loneLA.jpeg",
    tag: ["Concerts"],


  },
  {
    id: 9,
    title: "Ken",
    image: "images/hobbies/kensmkfst.jpeg",
    tag: ["Concerts"],


  },
  {
    id: 10,
    title: "Ken",
    image: "images/hobbies/kenny.jpeg",
    tag: ["Concerts"],

  },
  {
    id: 11,
    title: "Pierre",
    image: "images/hobbies/Pieree.jpeg",
    tag: ["Concerts"],

  },
  {
    id: 12,
    title: "Ken",
    image: "images/hobbies/kensmkfst.jpeg",
    tag: ["Concerts"],

  },
  {
    id: 13,
    title: "Keem",
    image: "images/hobbies/keem.jpeg",
    tag: ["Concerts"],

  },
  {
    id: 14,
    title: "Keem and Kendrick",
    image: "images/hobbies/Brothers.jpeg",
    tag: ["Concerts"],

  },
  {
    id: 15,
    title: "CFG",
    image: "images/hobbies/CFG.jpeg",
    tag: ["Concerts"],
  },

  {
    id: 16,
    title: "",
    image: "images/hobbies/skate/1.jpeg",
    tag: ["Skate"],
  },
  {
    id: 17,
    title: "",
    image: "images/hobbies/skate/2.jpeg",
    tag: ["Skate"],
  },
  {
    id: 18,
    title: "",
    image: "images/hobbies/skate/3.jpeg",
    tag: ["Skate"],
  },
  {
    id: 19,
    title: "",
    image: "images/hobbies/skate/4.jpeg",
    tag: ["Skate"],
  },
  {
    id: 20,
    title: "",
    image: "images/hobbies/skate/5.jpeg",
    tag: ["Skate"],
  },
  {
    id: 21,
    title: "",
    image: "images/hobbies/skate/6.jpeg",
    tag: ["Skate"],
  },
  {
    id: 22,
    title: "",
    image: "images/hobbies/skate/7.jpeg",
    tag: ["Skate"],
  },
  {
    id: 23,
    title: "",
    image: "images/hobbies/skate/8.jpeg",
    tag: ["Skate"],
  },
  {
    id: 24,
    title: "",
    image: "images/hobbies/skate/9.jpeg",
    tag: ["Skate"],
  },
  {
    id: 25,
    title: "",
    image: "images/hobbies/skate/10.jpeg",
    tag: ["Skate"],
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
    <section id="hobbies" className="mt-32">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Hobbies
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Concerts"
          isSelected={tag === "Concerts"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Skate"
          isSelected={tag === "Skate"}
        />
      </div>
      <ul
        ref={ref}
        className={`grid gap-8 md:gap-12 ${tag === "Skate" ? "grid-cols-2" : "md:grid-cols-3"}`}
        >

        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <HobbyCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
