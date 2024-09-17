"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import MenuOverlay from "./MenuOverlay";
import { useLanguage } from "./LanguageContext";
import i18n from "@/utils/i18n";

const navLinks = [
  { title: i18n.t("navAbout"), path: "#about" },
  { title: i18n.t("navProjects"), path: "#projects" },
  { title: i18n.t("navContact"), path: "#contact" },
];

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95 border-t-transparent border-l-transparent border-r-transparent">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-3xl md:text-5xl text-white font-black transition duration-500 ease-in-out transform hover:scale-110 hover:text-shadow-custom"
        >
          Gxxllx
        </Link>
        <div className="block md:hidden">
          {!navOpen ? (
            <button
              onClick={() => setNavOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <RxHamburgerMenu className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <RxCross2 className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
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
        </div>
      </div>
      {navOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
