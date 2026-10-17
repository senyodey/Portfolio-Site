import React from "react";
import SocialLinks from "../common/SocialLinks";
import { profile } from "../../data/portfolioData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <SocialLinks variant="plain" className="mb-4" />
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
