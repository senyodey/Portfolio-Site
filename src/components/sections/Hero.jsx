import React from "react";
import { Award, Download } from "lucide-react";
import { SiReact, SiTypescript, SiNodedotjs } from "react-icons/si";
import { profile, socialLinks, resumeUrl } from "../../data/portfolioData";

const orbitIcons = [
  { Icon: SiReact, color: "text-cyan-500", position: "-top-2 -left-4", delay: "0ms" },
  { Icon: SiTypescript, color: "text-blue-600", position: "-top-4 right-8", delay: "600ms" },
  { Icon: SiNodedotjs, color: "text-green-600", position: "bottom-6 -left-6", delay: "1200ms" },
];

const Hero = ({ setActiveSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 animate-fade-in relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40 dark:opacity-20 bg-[radial-gradient(circle_at_50%_20%,theme(colors.amber.200),transparent_60%)]" />

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 relative inline-block animate-scale-in">
          <div className="w-48 h-48 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-1">
            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
              <img
                src="/dey.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-slate-800 dark:bg-amber-500 rounded-full flex items-center justify-center">
            <Award className="w-8 h-8 text-amber-400 dark:text-slate-900" />
          </div>

          {orbitIcons.map(({ Icon, color, position, delay }, idx) => (
            <div
              key={idx}
              style={{ animationDelay: delay }}
              className={`absolute ${position} w-11 h-11 bg-white dark:bg-slate-800 rounded-full shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center animate-bounce-slow`}
            >
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
          ))}
        </div>

        <span
          className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm font-medium bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 animate-slide-up"
        >
          Founder @ Declek Technologies
        </span>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 max-w-3xl mx-auto animate-slide-up">
          {profile.headline}
        </h1>
        <p
          className="text-lg text-slate-500 dark:text-slate-400 mb-8 animate-slide-up max-w-2xl mx-auto"
          style={{ animationDelay: "200ms" }}
        >
          {profile.tagline}
        </p>

        <div
          className="flex justify-center space-x-4 mb-8 animate-slide-up"
          style={{ animationDelay: "400ms" }}
        >
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-slate-800 dark:bg-slate-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 ${social.color}`}
              title={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "600ms" }}
        >
          <button
            onClick={() => setActiveSection("projects")}
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
          >
            View Projects
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className="text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg font-medium hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            Get In Touch
          </button>
          {resumeUrl && (
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
