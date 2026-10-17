import React, { useState, useEffect, useRef } from "react";
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

export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const BASE_TITLE = `${profile.name} — ${profile.role}`;

const getSectionFromHash = () => {
  const hash = window.location.hash.replace("#", "");
  return SECTIONS.some((s) => s.id === hash) ? hash : "home";
};

const PortfolioSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(getSectionFromHash);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const mainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The URL hash is the single source of truth for the visible section, so
  // links, back/forward and shared URLs all behave the same way.
  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(getSectionFromHash());
      setIsMenuOpen(false);
      window.scrollTo(0, 0);
      mainRef.current?.focus({ preventScroll: true });
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const section = SECTIONS.find((s) => s.id === activeSection);
    document.title =
      activeSection === "home" ? BASE_TITLE : `${section.label} · ${profile.name}`;
  }, [activeSection]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    try {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch {
      // ignore storage errors (e.g. private browsing)
    }
  }, [darkMode]);

  // Clicking the link for the section already showing doesn't fire
  // hashchange, so just return to the top of it.
  const handleNavigate = (id) => {
    setIsMenuOpen(false);
    if (id === activeSection) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
      <a
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          mainRef.current?.focus();
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-amber-500 focus:text-slate-900 focus:font-semibold"
      >
        Skip to content
      </a>

      <Header
        sections={SECTIONS}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen((open) => !open)}
        scrolled={scrolled}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((mode) => !mode)}
        name={profile.name}
      />

      <main id="main" ref={mainRef} tabIndex={-1} className="pt-16 outline-none">
        {activeSection === "home" && (
          <>
            <Hero />
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
