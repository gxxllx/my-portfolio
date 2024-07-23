"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useTotalContributions } from "../utils/useTotalContributions";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const AchievementsSection = () => {
  const { totalContributions, isLoading, isError } =
    useTotalContributions("gxxllx");

  if (isLoading) {
    return (
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="border-[#33353F] border rounded-md py-16 gap-12 px-10 md:px-16 flex flex-col sm:flex-row md:gap-0 items-center justify-between"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="border-[#33353F] border rounded-md py-16 gap-12 px-10 md:px-16 flex flex-col sm:flex-row md:gap-0 items-center justify-between"></div>
      </div>
    );
  }

  const achievementsList = [
    {
      metric: "Projects",
      value: "5",
      postfix: "+",
    },
    {
      metric: "Contributions",
      value: totalContributions,
    },
    {
      metric: "Years",
      value: "1",
    },
  ];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 gap-12 px-10 md:px-16 flex flex-col sm:flex-row md:gap-0 items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix || ""}{" "}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value, 10)}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (index + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
