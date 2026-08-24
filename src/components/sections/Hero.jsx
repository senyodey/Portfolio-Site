import React from "react";
import { Award } from "lucide-react";
import { profile, socialLinks } from "../../data/portfolioData";

const Hero = ({ setActiveSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 animate-fade-in relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40 dark:opacity-20 bg-[radial-gradient(circle_at_50%_20%,theme(colors.amber.200),transparent_60%)]" />

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 relative inline-block animate-scale-in">
          <div className="w-48 h-48 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-1 animate-pulse-slow">
            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
              <img
                src="/dey.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-slate-800 dark:bg-amber-500 rounded-full flex items-center justify-center animate-bounce-slow">
            <Award className="w-8 h-8 text-amber-400 dark:text-slate-900" />
          </div>
        </div>

        <span
          className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm font-medium bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 animate-slide-up"
        >
          Founder @ Declek Technologies
        </span>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4 animate-slide-up">
          {profile.role}
        </h1>
        <p
          className="text-xl text-slate-600 dark:text-slate-300 mb-8 animate-slide-up max-w-2xl mx-auto"
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
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all shadow-lg"
          >
            View Projects
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-3 rounded-lg font-semibold hover:border-amber-400 transform hover:scale-105 transition-all shadow-md"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
