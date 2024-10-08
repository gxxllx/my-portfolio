"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {t("welcomeMessage")}
            </span>
            <br />
            <span className="hidden xl:block">
              <TypeAnimation
                sequence={["Guille", 1500, "Full Stack Developer", 1500]}
                wrapper="span"
                speed={150}
                repeat={Infinity}
              />
            </span>
            <span className="block xl:hidden">
              <TypeAnimation
                sequence={["Guille", 1500, "Full Stack\nDeveloper", 1500]}
                wrapper="span"
                speed={150}
                repeat={Infinity}
                style={{ whiteSpace: "pre-line" }}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl sm:mt-2">
            {t("welcomeAbout")}
          </p>
          <div className="">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-tertiary-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              {t("welcomeHire")}
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-tertiary-500 via-primary-500 to-secondary-500  hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                {t("welcomeCV")}
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-8 sm:place-self-auto sm:flex sm:items-center md:justify-end sm:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="/images/memoji.png"
              alt="hero image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2"
              style={{ maskImage: "linear-gradient(black 80%, transparent)" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
