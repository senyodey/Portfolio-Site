import React from "react";
import { socialLinks } from "../../data/portfolioData";

const variants = {
  pill: {
    list: "flex justify-center gap-4",
    link: "p-3 bg-slate-800 dark:bg-slate-700 text-white rounded-full transition-all duration-300 hover:scale-110",
    icon: "w-5 h-5",
  },
  plain: {
    list: "flex justify-center gap-6",
    link: "hover:text-amber-400 transition-colors",
    icon: "w-6 h-6",
  },
};

const SocialLinks = ({ variant = "pill", className = "", style }) => {
  const v = variants[variant];

  return (
    <ul className={`${v.list} ${className}`} style={style}>
      {socialLinks.map((social) => (
        <li key={social.label}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            className={`block ${v.link} ${variant === "pill" ? social.color : ""}`}
          >
            <social.icon className={v.icon} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
