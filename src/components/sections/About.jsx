import React from "react";
import { profile, stats, services } from "../../data/portfolioData";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-8 text-center animate-slide-down">
          About Me
        </h2>
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-slate-900/50 p-8 md:p-12 animate-scale-in">
          {profile.bio.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-lg text-slate-700 dark:text-slate-300 mb-6 last:mb-0"
            >
              {paragraph}
            </p>
          ))}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-4 bg-gradient-to-br from-amber-50 to-slate-50 dark:from-slate-700 dark:to-slate-700/60 rounded-lg transform hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                  {stat.num}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center animate-slide-down">
            What I Do
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                style={{ animationDelay: `${idx * 100}ms` }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-slate-900/50 p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-slide-up"
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
