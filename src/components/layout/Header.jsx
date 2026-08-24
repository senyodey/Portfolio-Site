import React from "react";
import { Menu, X, Award, Sun, Moon } from "lucide-react";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = ({
  activeSection,
  setActiveSection,
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
          <div className="flex items-center">
            <div className="relative">
              <Award className="w-8 h-8 text-amber-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"></div>
            </div>
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              {name}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-amber-600 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-500/10 dark:to-amber-500/20 dark:text-amber-400 shadow-md transform scale-105"
                    : "text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              title="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex items-center space-x-1 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              title="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          {menuItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                toggleMenu();
              }}
              style={{ animationDelay: `${idx * 50}ms` }}
              className={`flex items-center w-full px-6 py-4 transition-all duration-300 animate-slide-right ${
                activeSection === item.id
                  ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-l-4 border-amber-600"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
