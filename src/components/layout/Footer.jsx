import React from "react";
import { socialLinks, profile } from "../../data/portfolioData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              title={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
