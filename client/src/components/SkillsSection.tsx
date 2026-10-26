"use client";

import React, { useState } from "react";
import {
  Code2,
  Server,
  Database,
  Sparkles,
  Wrench,
  BookOpen,
  CheckCircle2,
  Layers,
  Cpu,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  badge: string;
  description: string;
  skills: { name: string; level: string; highlight?: boolean }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    badge: "User Interface & Experience",
    description:
      "Crafting high-speed, accessible, and reactive user interfaces with modern React, Next.js App Router, and Tailwind CSS.",
    skills: [
      { name: "React.js", level: "Expert", highlight: true },
      { name: "Next.js", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Expert", highlight: true },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "Redux Toolkit", level: "Proficient" },
      { name: "Context API", level: "Proficient" },
      { name: "HTML5 & CSS3", level: "Expert" },
    ],
  },
  {
    title: "Backend & Distributed APIs",
    icon: Server,
    color: "from-violet-500 to-indigo-500",
    badge: "Microservices & Auth",
    description:
      "Designing robust RESTful APIs, scalable middleware, session management, and microservice architectures.",
    skills: [
      { name: "Node.js", level: "Advanced", highlight: true },
      { name: "Express.js", level: "Advanced", highlight: true },
      { name: "RESTful APIs", level: "Expert", highlight: true },
      { name: "JWT Authentication", level: "Advanced", highlight: true },
      { name: "Google OAuth 2.0", level: "Advanced" },
      { name: "Next.js Route Handlers", level: "Advanced" },
      { name: "WebSockets / Realtime", level: "Proficient" },
      { name: "Middleware & CORS", level: "Advanced" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    badge: "Persistence & Caching",
    description:
      "Data modeling, indexing, aggregate pipelines, and distributed replication across document and relational stores.",
    skills: [
      { name: "MongoDB", level: "Advanced", highlight: true },
      { name: "Mongoose ODM", level: "Advanced", highlight: true },
      { name: "MySQL", level: "Proficient" },
      { name: "Firebase Realtime DB", level: "Proficient" },
      { name: "Schema Validation", level: "Advanced" },
      { name: "Indexing & Query Opt.", level: "Advanced" },
    ],
  },
  {
    title: "AI Integration & Agents",
    icon: Sparkles,
    color: "from-fuchsia-500 to-pink-500",
    badge: "LLM Orchestration",
    description:
      "Integrating cutting-edge generative AI models into full-stack web applications for smart automation.",
    skills: [
      { name: "Google Gemini API", level: "Advanced", highlight: true },
      { name: "AI Feature Pipeline", level: "Advanced", highlight: true },
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "Real-time AI Feedback", level: "Advanced" },
      { name: "Speech & Audio AI", level: "Proficient" },
    ],
  },
  {
    title: "Languages & Core CS",
    icon: BookOpen,
    color: "from-amber-500 to-orange-500",
    badge: "Algorithmic Foundation",
    description:
      "Strong computer science fundamentals rooted in algorithmic problem-solving, data structures, and OOP design.",
    skills: [
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "Java", level: "Advanced", highlight: true },
      { name: "JavaScript", level: "Expert" },
      { name: "Python", level: "Proficient" },
      { name: "Data Structures & Algos", level: "Advanced", highlight: true },
      { name: "OOP Principles", level: "Advanced" },
      { name: "Operating Systems & CN", level: "Proficient" },
      { name: "DBMS Concepts", level: "Advanced" },
    ],
  },
  {
    title: "DevOps & Cloud Tools",
    icon: Wrench,
    color: "from-blue-500 to-cyan-500",
    badge: "Deployment & CI/CD",
    description:
      "Modern tooling and continuous deployment platforms ensuring rapid, automated, zero-downtime releases.",
    skills: [
      { name: "Git & GitHub", level: "Expert", highlight: true },
      { name: "Vercel", level: "Expert", highlight: true },
      { name: "Render", level: "Advanced" },
      { name: "Firebase Cloud", level: "Proficient" },
      { name: "Postman API Testing", level: "Expert" },
      { name: "VS Code", level: "Expert" },
      { name: "Agile / Scrum / SDLC", level: "Proficient" },
    ],
  },
];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#070b13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive overview of Anand&apos;s full-stack skill set, spanning front-end architectures,
            backend APIs, generative AI integrations, and computer engineering foundations.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            const isHovered = selectedCategory === idx;

            return (
              <div
                key={cat.title}
                onMouseEnter={() => setSelectedCategory(idx)}
                onMouseLeave={() => setSelectedCategory(null)}
                className={`p-6 sm:p-7 rounded-3xl bg-surface-50/70 border border-white/10 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between space-y-5 hover:-translate-y-1.5 hover:shadow-xl ${
                  isHovered ? "border-cyan-500/40 shadow-cyan-500/10" : ""
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${cat.color} p-[1px] flex items-center justify-center`}
                    >
                      <div className="w-full h-full bg-[#080c14] rounded-[15px] flex items-center justify-center text-white">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-slate-300 bg-surface-100 border border-white/5">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mt-4">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                        skill.highlight
                          ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-medium"
                          : "bg-surface-100 text-slate-300 border border-white/5"
                      }`}
                    >
                      {skill.highlight && (
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
