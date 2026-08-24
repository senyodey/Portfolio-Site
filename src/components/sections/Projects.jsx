import React from "react";
import { ExternalLink } from "lucide-react";
import { featuredProjects, whatsappNumber } from "../../data/portfolioData";

const Projects = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 animate-fade-in">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-3 text-center animate-slide-down">
          Featured Projects
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 text-center animate-slide-down">
          Live products built end-to-end at Declek Technologies
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${idx * 150}ms` }}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-slate-900/50 overflow-hidden hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 animate-slide-up"
            >
              <div
                className={`h-32 bg-gradient-to-br ${project.accent} flex items-center justify-between px-6 relative overflow-hidden`}
              >
                <span className="text-2xl font-bold text-white z-10">
                  {project.title}
                </span>
                <ExternalLink className="w-5 h-5 text-white/80 group-hover:text-white z-10 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/20" />
              </div>
              <div className="p-6">
                <p className="text-amber-600 dark:text-amber-400 font-medium mb-3 italic">
                  "{project.tagline}"
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center animate-slide-up">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            More projects available on request
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi! I'd like to see more of your work.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-slate-800 dark:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 dark:hover:bg-slate-600 transform hover:scale-105 transition-all shadow-md"
          >
            Ask for more work samples
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
