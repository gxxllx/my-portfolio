"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import i18n from "@/utils/i18n";

const projectsData = [
  {
    id: 1,
    title: "Mr.Converter",
    description: i18n.t("projectsMrConverter"),
    image: "images/DonConvertidor.PNG",
    tag: [`${i18n.t("projectsTag1")}`, `${i18n.t("projectsTag2")}`],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    description: i18n.t("projectsPortfolio"),
    image: "images/Portfolio.PNG",
    tag: [`${i18n.t("projectsTag1")}`, `${i18n.t("projectsTag2")}`],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "EternalMedia",
    description: i18n.t("projectsEternalMedia"),
    image: "images/",
    tag: [`${i18n.t("projectsTag1")}`, `${i18n.t("projectsTag2")}`],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: i18n.t("projectsComingSoon"),
    description: i18n.t("projectsComingSoonDesc"),
    image: "images/",
    tag: [`${i18n.t("projectsTag1")}`],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState(`${i18n.t("projectsTag1")}`);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  console.log(tag);

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
        {i18n.t("projectsTitle")}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name={i18n.t("projectsTag1")}
          isSelected={tag === `${i18n.t("projectsTag1")}`}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={i18n.t("projectsTag2")}
          isSelected={tag === `${i18n.t("projectsTag2")}`}
        />

        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
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
