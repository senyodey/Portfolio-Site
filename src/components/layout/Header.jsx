import React from "react";
import { Menu, X, Award, Sun, Moon } from "lucide-react";

const ThemeToggle = ({ darkMode, toggleDarkMode, className = "" }) => (
  <button
    type="button"
    onClick={toggleDarkMode}
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    className={`p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 ${className}`}
  >
    {darkMode ? (
      <Sun className="w-5 h-5" aria-hidden="true" />
    ) : (
      <Moon className="w-5 h-5" aria-hidden="true" />
    )}
  </button>
);

const Header = ({
  sections,
  activeSection,
  onNavigate,
  isMenuOpen,
  toggleMenu,
  scrolled,
  darkMode,
  toggleDarkMode,
  name,
}) => {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 shadow-lg backdrop-blur-sm"
          : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            onClick={() => onNavigate("home")}
            className="flex items-center min-w-0"
          >
            <span className="relative shrink-0">
              <Award className="w-8 h-8 text-amber-500" aria-hidden="true" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"></span>
            </span>
            <span className="ml-2 text-xl font-bold truncate bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              {name}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center space-x-2">
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => onNavigate(item.id)}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-amber-600 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400"
                    : "text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              className="ml-2"
            />
          </nav>

          <div className="flex items-center space-x-1 md:hidden">
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!isMenuOpen}
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
        >
          {sections.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => onNavigate(item.id)}
              aria-current={activeSection === item.id ? "page" : undefined}
              style={{ animationDelay: `${idx * 50}ms` }}
              className={`flex items-center w-full px-6 py-4 transition-all duration-300 animate-slide-right ${
                activeSection === item.id
                  ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-l-4 border-amber-600"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
