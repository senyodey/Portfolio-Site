import React from "react";
import { MessageCircle } from "lucide-react";
import { socialLinks, whatsappNumber } from "../../data/portfolioData";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 animate-fade-in">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4 text-center animate-slide-down">
          Get In Touch
        </h2>
        <p
          className="text-center text-slate-600 dark:text-slate-300 mb-8 animate-slide-down"
          style={{ animationDelay: "100ms" }}
        >
          Let's chat on WhatsApp! Click the button below to start a
          conversation.
        </p>
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-slate-900/50 p-8 md:p-12 animate-scale-in">
          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-bounce-slow">
              <MessageCircle className="w-12 h-12 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              Let's Connect on WhatsApp
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
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

            <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Or connect with me on:
              </p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800 dark:bg-slate-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 ${social.color}`}
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
  );
};

export default Contact;
