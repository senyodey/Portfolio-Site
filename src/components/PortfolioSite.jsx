import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Mail,
  Award,
  Github,
  Linkedin,
  Globe,
  MessageCircle,
} from "lucide-react";

const PortfolioSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Award },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const skills = [
    { name: "Ionic", icon: "⚡", color: "from-blue-500 to-blue-600" },
    { name: "Angular", icon: "🅰️", color: "from-red-500 to-red-600" },
    { name: "TypeScript", icon: "TS", color: "from-blue-600 to-blue-700" },
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-cyan-600" },
    { name: "HTML5", icon: "🌐", color: "from-orange-500 to-orange-600" },
    { name: "CSS3", icon: "🎨", color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", icon: "JS", color: "from-yellow-500 to-yellow-600" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600" },
  ];

  const projects = [
    {
      title: "Shop Management System",
      desc: "Web app for managing inventory,sales-persons, delivery persons and more",
      tech: "React, Node.js",
    },
    {
      title: "Portfolio Dashboard",
      desc: "Analytics dashboard for tracking metrics",
      tech: "React, TypeScript",
    },
    {
      title: "E-Commerce App",
      desc: "Mobile shopping application with payment integration",
      tech: "React, Node.js",
    },

    {
      title: "To-Do List App",
      desc: "Task management app with reminders and priorities",
      tech: "Ionic, Angular",
    },
    {
      title: "Blog Platform",
      desc: "Content management system for blogging",
      tech: "React, Node.js",
    },
    {
      title: "School Management System",
      desc: "Web app for managing students, teachers, classes and more",
      tech: "React, Node.js",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/senyodey",
      color: "hover:bg-slate-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/cleeric-dey-02303822a/",
      color: "hover:bg-blue-600",
    },
    {
      icon: Globe,
      label: "Website",
      url: "https://declektech.com",
      color: "hover:bg-amber-600",
    },
  ];

  const whatsappNumber = "233248977347";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-sm shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="relative">
                <Award className="w-8 h-8 text-amber-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"></div>
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Cleeric Senyo Dey
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? "text-amber-600 bg-gradient-to-r from-amber-50 to-amber-100 shadow-md transform scale-105"
                          : "text-slate-700 hover:text-amber-600 hover:bg-slate-50 hover:scale-105"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="bg-white border-t border-slate-200">
            {menuItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                style={{ animationDelay: `${idx * 50}ms` }}
                className={`flex items-center space-x-3 w-full px-6 py-4 transition-all duration-300 animate-slide-right ${
                  activeSection === item.id
                    ? "text-amber-600 bg-amber-50 border-l-4 border-amber-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        {activeSection === "home" && (
          <section className="min-h-screen flex items-center justify-center px-4 animate-fade-in">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 relative inline-block animate-scale-in">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-1 animate-pulse-slow">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <img
                      src="/dey.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center animate-bounce-slow">
                  <Award className="w-8 h-8 text-amber-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 animate-slide-up">
                Full Stack Developer
              </h1>
              <p
                className="text-xl text-slate-600 mb-8 animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                Creating beautiful & responsive applications
              </p>

              {/* Social Links */}
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
                    className={`p-3 bg-slate-800 text-white rounded-full transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <button
                onClick={() => setActiveSection("contact")}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all shadow-lg animate-slide-up"
                style={{ animationDelay: "600ms" }}
              >
                Get In Touch
              </button>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === "about" && (
          <section className="min-h-screen flex items-center justify-center px-4 py-20 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center animate-slide-down">
                About Me
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 animate-scale-in">
                <p className="text-lg text-slate-700 mb-6">
                  I'm a passionate developer specializing in creating modern,
                  responsive web and mobile applications. With expertise in
                  Ionic Angular, React and NodeJs. I build cross-platform
                  solutions that deliver exceptional user experiences.
                </p>
                <p className="text-lg text-slate-700 mb-6">
                  My approach combines clean code, intuitive design, and
                  performance optimization to create applications that users
                  love and businesses rely on.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[
                    { num: "4+", label: "Years Experience" },
                    { num: "20+", label: "Projects Done" },
                    { num: "10+", label: "Happy Clients" },
                    { num: "100%", label: "Satisfaction" },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="text-center p-4 bg-gradient-to-br from-amber-50 to-slate-50 rounded-lg transform hover:scale-105 transition-all duration-300 animate-slide-up"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="text-3xl font-bold text-amber-600">
                        {stat.num}
                      </div>
                      <div className="text-sm text-slate-600 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <section className="min-h-screen flex items-center justify-center px-4 py-20 animate-fade-in">
            <div className="max-w-4xl mx-auto w-full">
              <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center animate-slide-down">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    style={{ animationDelay: `${idx * 100}ms` }}
                    className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-2xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-pointer animate-scale-in"
                  >
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg`}
                    >
                      {skill.icon}
                    </div>
                    <p className="text-slate-700 font-semibold text-lg">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section className="min-h-screen flex items-center justify-center px-4 py-20 animate-fade-in">
            <div className="max-w-6xl mx-auto w-full">
              <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center animate-slide-down">
                Featured Projects
              </h2>
              <p className="text-4xl font-semi-bold text-slate-800 mb-8 text-left animate-slide-down">
                See projects on request
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    style={{ animationDelay: `${idx * 150}ms` }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-slide-up"
                  >
                    <div className="h-40 bg-gradient-to-br from-amber-400 via-amber-500 to-slate-600 flex items-center justify-center relative overflow-hidden">
                      <Briefcase className="w-16 h-16 text-white z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/20"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 mb-4">{project.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-amber-600 font-semibold">
                          {project.tech}
                        </span>
                        <button className="text-slate-700 hover:text-amber-600 transition-colors">
                          <span className="text-xl">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section className="min-h-screen flex items-center justify-center px-4 py-20 animate-fade-in">
            <div className="max-w-2xl mx-auto w-full">
              <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center animate-slide-down">
                Get In Touch
              </h2>
              <p
                className="text-center text-slate-600 mb-8 animate-slide-down"
                style={{ animationDelay: "100ms" }}
              >
                Let's chat on WhatsApp! Click the button below to start a
                conversation.
              </p>
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 animate-scale-in">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-bounce-slow">
                    <MessageCircle className="w-12 h-12 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800">
                    Let's Connect on WhatsApp
                  </h3>
                  <p className="text-slate-600">
                    Have a project in mind? Want to collaborate? Just want to
                    say hi? Send me a message on WhatsApp and I'll get back to
                    you as soon as possible!
                  </p>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hi! I found your portfolio and would like to connect.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <div className="pt-6 border-t border-slate-200">
                    <p className="text-slate-600 mb-4">
                      Or connect with me on:
                    </p>
                    <div className="flex justify-center space-x-4">
                      {socialLinks.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 bg-slate-800 text-white rounded-full transition-all duration-300 transform hover:scale-110 ${social.color}`}
                          title={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                title={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <p>&copy; 2025 Cleeric. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideRight {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes rotateIn {
          from {
            transform: rotate(-90deg);
            opacity: 0;
          }
          to {
            transform: rotate(0);
            opacity: 1;
          }
        }
        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulseSlow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slide-down {
          animation: slideDown 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
        .animate-slide-right {
          animation: slideRight 0.4s ease-out;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out;
        }
        .animate-rotate-in {
          animation: rotateIn 0.3s ease-out;
        }
        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PortfolioSite;
