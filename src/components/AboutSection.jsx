"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import i18n from "@/utils/i18n";
import { useTranslation } from "react-i18next";

const TAB_DATA = [
  {
    title: i18n.t("aboutSkills"),
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
    title: i18n.t("aboutEducation"),
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          {i18n.t("aboutEducation1")}
          <span>&#40;2020 - 2022&#41;</span>
        </li>
        <li>
          {i18n.t("aboutEducation2")} <span>&#40;2022 - 2024&#41;</span>
        </li>
        <li>
          {i18n.t("aboutEducation3")}{" "}
          <span>&#40;2024 - {i18n.t("aboutEduactionPresent")}&#41;</span>
        </li>
      </ul>
    ),
  },
  {
    title: i18n.t("aboutCertifications"),
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>{i18n.t("aboutCertifications1")}</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const { t } = useTranslation();
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
          <h2 className="text-4xl font-bold text-whitemb-4">
            {t("aboutTitle")}
          </h2>
          <p className="text-base lg:text-lg">{t("aboutText")}</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              {t("aboutSkills")}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              {t("aboutEducation")}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              {t("aboutCertifications")}{" "}
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
