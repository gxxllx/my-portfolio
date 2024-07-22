"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { getTotalContributions } from "../app/api/githubApi";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementsSection = () => {
  const [achievementsList, setAchievementsList] = useState([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const totalContributions = await getTotalContributions();
        const newAchievementsList = [
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
        setAchievementsList(newAchievementsList);
      } catch (error) {
        console.error("Error fetching achievements:", error.message);
      }
    };

    fetchAchievements();
  }, []);

  if (achievementsList.length === 0) {
    return <p>Loading...</p>;
  }

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
              {/* Asegúrate de que 'prefix' existe en los datos */}
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
