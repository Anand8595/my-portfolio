"use client";

import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Award,
} from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  badgeColor: string;
  achievements: string[];
  metrics: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern (MERN)",
    company: "Paarsh Infotech",
    duration: "01/2026 – 06/2026",
    location: "Nashik, India",
    type: "Internship",
    badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
    metrics: "30% faster API handling & 100+ secured endpoints",
    achievements: [
      "Spearheaded full-stack web features using React.js, Node.js, and Express.js, improving functionality across 5+ modules.",
      "Enforced JWT-based authentication and role-based access control (RBAC), securing user access for 100+ application endpoints.",
      "Designed and built responsive UI components and incorporated RESTful APIs across 5+ modules, reducing API response handling time by 30%.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Next Level Computech Solutions",
    duration: "12/2024 – 02/2025",
    location: "Nashik, India",
    type: "Internship",
    badgeColor: "border-violet-500/40 text-violet-300 bg-violet-500/10",
    metrics: "20% reduction in development cycle time",
    achievements: [
      "Enhanced web application features using React.js and JavaScript (ES6+), improving user experience across 4+ modules.",
      "Engineered reusable React components and applied dynamic UI functionality, reducing development time by 20%.",
      "Collaborated on 3+ React-based projects, maintaining clean code standards and delivering fully responsive design.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Codesoft",
    duration: "07/2024 – 08/2024",
    location: "Remote",
    type: "Internship",
    badgeColor: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10",
    metrics: "25% reduction in redundant DOM operations",
    achievements: [
      "Developed responsive web pages using HTML5, CSS3, and JavaScript (ES6+) following modern web design standards.",
      "Optimized page load performance by refactoring CSS and minimizing redundant DOM operations by 25%.",
      "Executed JavaScript logic and DOM manipulation for interactive features across multiple production pages.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#070b13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on full-stack development experience building responsive, secure web applications,
            REST APIs, and scalable modular frontends across multiple software organizations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="mt-16 max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-violet-500 before:to-transparent before:-translate-x-1/2">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.company}
              className={`relative flex flex-col sm:flex-row items-start ${
                idx % 2 === 0 ? "sm:flex-row-reverse" : ""
              } gap-6 group`}
            >
              {/* Center Dot Indicator */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080c14] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-125 transition-transform duration-300 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:bg-white" />
              </div>

              {/* Card Container */}
              <div className="w-full sm:w-[calc(50%-2rem)] ml-10 sm:ml-0 p-6 sm:p-7 rounded-3xl bg-surface-50/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 space-y-4">
                {/* Header */}
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border ${exp.badgeColor}`}
                    >
                      {exp.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors pt-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-cyan-300 font-medium">
                    <span>{exp.company}</span>
                    <span className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Metric Highlight */}
                <div className="p-2.5 rounded-xl bg-surface-100/70 border border-white/5 flex items-center gap-2 text-xs text-emerald-300 font-medium">
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{exp.metrics}</span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 pt-1 border-t border-white/5">
                  {exp.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
