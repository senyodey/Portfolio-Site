import React from "react";
import { process } from "../../data/portfolioData";

const Process = () => {
  return (
    <section className="px-4 py-20 animate-fade-in">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-3 text-center animate-slide-down">
          How I Work
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 text-center animate-slide-down">
          The process behind every project, from idea to launch
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, idx) => (
            <div
              key={step.title}
              style={{ animationDelay: `${idx * 150}ms` }}
              className="relative bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-slate-900/50 p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-slide-up"
            >
              <span className="absolute top-4 right-4 text-4xl font-bold text-slate-100 dark:text-slate-700 select-none">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center relative z-10">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 relative z-10">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
