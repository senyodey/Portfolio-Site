import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import Process from "./sections/Process";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import { profile } from "../data/portfolioData";

const VALID_SECTIONS = [
  "home",
  "about",
  "skills",
  "projects",
  "testimonials",
  "contact",
];

const PortfolioSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    return VALID_SECTIONS.includes(hash) ? hash : "home";
  });
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncFromLocation = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveSection(VALID_SECTIONS.includes(hash) ? hash : "home");
    };
    window.addEventListener("hashchange", syncFromLocation);
    window.addEventListener("popstate", syncFromLocation);
    return () => {
      window.removeEventListener("hashchange", syncFromLocation);
      window.removeEventListener("popstate", syncFromLocation);
    };
  }, []);

  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "");
    if (currentHash !== activeSection) {
      window.history.pushState(null, "", `#${activeSection}`);
    }
  }, [activeSection]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    try {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch {
      // ignore storage errors (e.g. private browsing)
    }
  }, [darkMode]);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        scrolled={scrolled}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        name={profile.name}
      />

      <main className="pt-16">
        {activeSection === "home" && (
          <>
            <Hero setActiveSection={setActiveSection} />
            <Process />
          </>
        )}
        {activeSection === "about" && <About />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "testimonials" && <Testimonials />}
        {activeSection === "contact" && <Contact />}
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioSite;
