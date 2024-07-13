"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-10">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-5xl sm:text-6xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello,&nbsp;I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Guille", 1500, "Full Stack Developer", 1500]}
              wrapper="span"
              speed={150}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl sm:mt-2">
            I&apos;m a passionate learner and developer. I love to build
            interesting projects and learn new technologies. My goal is to grow
            professionally contributing the creations of projects so I can keep
            learning and improving my skills.
          </p>
          <div className="">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8 sm:place-self-auto sm:flex sm:items-center md:justify-end sm:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[325px] lg:h-[325px] relative">
            <Image
              src="/images/prueba.jpg"
              alt="hero image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
