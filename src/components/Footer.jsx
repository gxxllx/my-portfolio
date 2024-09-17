import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container flex p-12 justify-between gap-9">
        <span className="text-white font-extrabold">Gxxllx</span>
        <p className="text-slate-600">&copy; {t("footerRights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
