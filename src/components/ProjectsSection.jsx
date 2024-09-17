"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import i18n from "@/utils/i18n";
import { useLanguage } from "./LanguageContext";

const ProjectsSection = () => {
  const { language } = useLanguage();
  const [projectsData, setProjectsData] = useState([]);
  const [tag, setTag] = useState(i18n.t("projectsTag1"));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const initialProjectsData = [
      {
        id: 1,
        title: "Mr.Converter",
        description: "projectsMrConverter",
        image: "images/DonConvertidor.PNG",
        tag: ["projectsTag1", "projectsTag2"],
        gitUrl: "/",
        previewUrl: "/",
      },
      {
        id: 2,
        title: "Portfolio",
        description: "projectsPortfolio",
        image: "images/Portfolio.PNG",
        tag: ["projectsTag1", "projectsTag2"],
        gitUrl: "/",
        previewUrl: "/",
      },
      {
        id: 3,
        title: "EternalMedia",
        description: "projectsEternalMedia",
        image: "images/EternalMedia.PNG",
        tag: ["projectsTag1", "projectsTag2"],
        gitUrl: "/",
        previewUrl: "/",
      },
      {
        id: 4,
        title: "projectsComingSoon",
        description: "projectsComingSoonDesc",
        image: "images/",
        tag: ["projectsTag1"],
        gitUrl: "/",
        previewUrl: "/",
      },
    ];

    const updatedProjects = initialProjectsData.map((project) => ({
      ...project,
      description: i18n.t(project.description),
      title: i18n.t(project.title),
      tag: project.tag.map((tag) => i18n.t(tag)),
    }));

    setProjectsData(updatedProjects);
    setTag(i18n.t("projectsTag1"));
  }, [language]);

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
          isSelected={tag === i18n.t("projectsTag1")}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={i18n.t("projectsTag2")}
          isSelected={tag === i18n.t("projectsTag2")}
        />
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
