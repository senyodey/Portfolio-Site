import {
  Github,
  Linkedin,
  Globe,
  Code2,
  Smartphone,
  Monitor,
  Search,
  PenTool,
  Terminal,
  Rocket,
} from "lucide-react";

export const profile = {
  name: "Cleeric Senyo Dey",
  role: "Full Stack Developer",
  tagline: "Building production software for schools, shops and students across Ghana",
  bio: [
    "I'm a passionate developer specializing in creating modern, responsive web and mobile applications. With expertise in Ionic, Angular, React and Node.js, I build cross-platform solutions that deliver exceptional user experiences.",
    "Through Declek Technologies, I design and ship SaaS products end-to-end — from the first line of code to the people actually using them every day.",
  ],
};

export const stats = [
  { num: "4+", label: "Years Experience" },
  { num: "20+", label: "Projects Done" },
  { num: "10+", label: "Happy Clients" },
  { num: "100%", label: "Satisfaction" },
];

export const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, responsive web apps and dashboards built with React, Angular and Node.js.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Cross-platform mobile apps with Ionic and Angular that feel native.",
  },
  {
    icon: Monitor,
    title: "Desktop Software",
    desc: "Custom desktop tools for teams that need software to fit how they already work.",
  },
];

export const process = [
  {
    icon: Search,
    title: "Discover",
    desc: "Understand the goal, the users, and what success actually looks like before writing a line of code.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Sketch the flow and the interface until the experience feels obvious.",
  },
  {
    icon: Terminal,
    title: "Develop",
    desc: "Build it with clean, tested code using whatever the problem actually needs.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    desc: "Ship it, monitor it, and keep improving it based on how people actually use it.",
  },
];

export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "⚛️", color: "from-cyan-500 to-cyan-600" },
      { name: "Angular", icon: "🅰️", color: "from-red-500 to-red-600" },
      { name: "TypeScript", icon: "TS", color: "from-blue-600 to-blue-700" },
      { name: "JavaScript", icon: "JS", color: "from-yellow-500 to-yellow-600" },
      { name: "HTML5", icon: "🌐", color: "from-orange-500 to-orange-600" },
      { name: "CSS3", icon: "🎨", color: "from-blue-500 to-blue-600" },
    ],
  },
  {
    category: "Mobile & Backend",
    skills: [
      { name: "Ionic", icon: "⚡", color: "from-blue-500 to-blue-600" },
      { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600" },
    ],
  },
];

export const featuredProjects = [
  {
    title: "AfriClass",
    tagline: "Run your school like a modern product team.",
    desc: "The operating system for K-12 schools — admissions, attendance, results, fees and parent communication in one calm, realtime dashboard built for admins, teachers, students and parents.",
    tech: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Node.js", "PostgreSQL"],
    url: "https://manage.declektech.com",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    title: "Lumi",
    tagline: "Run your shop like the till never lies.",
    desc: "A point-of-sale and inventory SaaS for shops — track every item, order and cedi from the counter to the back room. Built-in AI writes listings, flags odd orders and tells you what to reorder.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    url: "https://lumi.declektech.com",
    accent: "from-slate-700 to-slate-900",
  },
  {
    title: "BookieSpace",
    tagline: "Learn smarter, not harder.",
    desc: "An e-learning platform for Ghanaian high school students — simulated practicals, an AI tutor and exam-style testing to help students prepare with confidence.",
    tech: ["React", "KaTeX", "node.js", "Tailwind CSS", "postgreSQL"],
    url: "https://bookiespace.com",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Declek Sweets",
    tagline: "Fresh baked delights delivered to your door.",
    desc: "An online storefront for a bakery — browse handcrafted pastries, breads and cakes, add to cart, book an event, and order same-day delivery or pickup.",
    tech: ["React", "Tailwind CSS"],
    url: "https://declerksweets.netlify.app",
    accent: "from-amber-400 to-orange-500",
  },
];

export const testimonials = [
  {
    quote:
      "The custom shop management system genuinely improved our productivity — everything runs a lot smoother now.",
    name: "Paul Kudzo",
    role: "Wasco Ventures",
  },
  {
    quote: "AfriClass has been a huge help for our school and staff.",
    name: "Mrs. Akua Osei",
    role: "Head of Godswill Academy",
  },
  {
    quote: "The Lumi app put me on another radar entirely.",
    name: "Amazing",
    role: "Owner, Amazing Com-Tech",
  },
];

export const resumeUrl = "/Cleeric_Dey_Resume.pdf";

export const socialLinks = [
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

export const whatsappNumber = "233248977347";
