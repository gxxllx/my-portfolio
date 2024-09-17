import React, { useState } from "react";
import NavLink from "./NavLink";
import i18n from "@/utils/i18n";
import { useLanguage } from "./LanguageContext";

const MenuOverlay = ({ links }) => {
  const { language, changeLanguage } = useLanguage();

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
      <li>
        {language === "en" ? (
          <button
            onClick={() => changeLanguage("es")}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:drop-shadow-2xl hover:shadow-slate-100 duration-300"
          >
            ES
          </button>
        ) : (
          <button
            onClick={() => changeLanguage("en")}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:drop-shadow-2xl hover:shadow-slate-100 duration-300"
          >
            EN
          </button>
        )}
      </li>
    </ul>
  );
};

export default MenuOverlay;
