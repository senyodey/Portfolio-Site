import React from "react";
import { Quote } from "lucide-react";
import { testimonials } from "../../data/portfolioData";

const AVATAR_COLORS = [
  "from-amber-400 to-orange-500",
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-pink-500 to-rose-600",
];

const TITLE_WORDS = new Set(["mr", "mrs", "ms", "miss", "dr", "prof"]);

const getInitials = (text) => {
  const words = text
    .replace(/[.,]/g, "")
    .split(/\s+/)
    .filter((w) => w && !TITLE_WORDS.has(w.toLowerCase()));
  const source = words.length ? words : text.split(/\s+/);
  return source
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
};

const Testimonials = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 animate-fade-in">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-3 text-center animate-slide-down">
          What Clients Say
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 text-center animate-slide-down">
          Feedback from people using the products
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 150}ms` }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-slate-900/50 p-6 flex flex-col animate-slide-up"
            >
              <Quote className="w-8 h-8 text-amber-400 mb-4" />
              <p className="text-slate-700 dark:text-slate-200 mb-6 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                <div
                  className={`w-11 h-11 shrink-0 rounded-full bg-gradient-to-br ${
                    AVATAR_COLORS[idx % AVATAR_COLORS.length]
                  } flex items-center justify-center text-white font-semibold text-sm`}
                >
                  {getInitials(t.name || t.role)}
                </div>
                <div>
                  {t.name && (
                    <p className="font-semibold text-slate-800 dark:text-white">
                      {t.name}
                    </p>
                  )}
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
