"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Django</li>
        <li>React</li>
        <li>Vue.js</li>
        <li>MySQL</li>
        <li>TailwindCSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          General Certificate of Education <span>&#40;2020 - 2022&#41;</span>
        </li>
        <li>
          Certificate of Higher Education in Web Development{" "}
          <span>&#40;2022 - 2024&#41;</span>
        </li>
        <li>
          Computer Science <span>&#40;2024 - Present&#41;</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Python Course</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative flex items-center justify-center h-auto">
          <Image
            src="/images/PixelArt.png"
            alt="Proyect 1"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-whitemb-4">About me</h2>
          <p className="text-base lg:text-lg">
            My name is Guillermo and I am a junior full-stack developer.
            Recently I graduated in a Web Development Professional Formation
            Degree. Currently, I am studying computer science and I had been
            working as a Database Analyst the last year. My goal is to become a
            software engineer and work on projects that can improve my skills
            and help me grow as a professional. I encourage you to hire me so we
            can grow together professionally.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 h-36">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
