import React from "react";
import { skillGroups } from "../../data/portfolioData";

const Skills = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 animate-fade-in">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-8 text-center animate-slide-down">
          Skills & Expertise
        </h2>

        <div className="space-y-10">
          {skillGroups.map((group, gIdx) => (
            <div key={group.category}>
              <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wide text-sm">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    style={{ animationDelay: `${(gIdx * 4 + idx) * 100}ms` }}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-slate-900/50 p-6 text-center hover:shadow-2xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-pointer animate-scale-in"
                  >
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg`}
                    >
                      {skill.icon}
                    </div>
                    <p className="text-slate-700 dark:text-slate-200 font-semibold text-lg">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
