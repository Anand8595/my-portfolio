"use client";

import React from "react";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  FileBadge,
} from "lucide-react";

const EDUCATION = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "Savitribai Phule Pune University",
    duration: "2022 – 2026",
    location: "Nashik, India",
    grade: "CGPA: 7.51",
    highlights: "Core focus on Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, and Full Stack Web Architectures.",
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Science",
    institution: "Maharashtra State Board",
    duration: "2021 – 2022",
    location: "Nashik, India",
    grade: "77.83%",
    highlights: "Physics, Chemistry, Mathematics & Computer Science foundation.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Maharashtra State Board",
    duration: "2019 – 2020",
    location: "Nashik, India",
    grade: "78.60%",
    highlights: "Distinction in Mathematics and Science.",
  },
];

const CERTIFICATIONS = [
  {
    title: "Full Stack Development Professional",
    issuer: "The Kiran Academy",
    description: "Intensive training in MERN stack architecture, TypeScript, RESTful API design, and database schema modeling.",
  },
  {
    title: "Full Stack Development Certification",
    issuer: "Anudip Foundation",
    description: "Hands-on projects covering React.js components, Node.js microservices, authentication security, and agile methodologies.",
  },
  {
    title: "Galactic Problem Solving",
    issuer: "NASA Space Apps / Galactic Challenges",
    description: "Recognized for creative problem-solving and algorithmic logic in collaborative computing challenges.",
  },
];

export default function EducationCertificationsSection() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Formal <span className="gradient-text">Education</span>
              </h2>
            </div>

            <div className="space-y-4 pt-2">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-surface-50/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {edu.grade}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {edu.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-cyan-300 font-medium mt-0.5">
                      <span>{edu.institution}</span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1 border-t border-white/5">
                    {edu.highlights}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-medium">
                <Award className="w-3.5 h-3.5" />
                <span>Credentials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Licenses & <span className="gradient-text">Certifications</span>
              </h2>
            </div>

            <div className="space-y-4 pt-2">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-surface-50/80 border border-white/10 hover:border-violet-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                      <FileBadge className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-violet-300 font-medium font-mono">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
