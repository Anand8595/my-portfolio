"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  FileDown,
  Eye,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Code2,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/Icons";
import ResumeModal from "@/components/ResumeModal";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleViewResume = () => {
    setIsResumeOpen(true);
  };
  return (
    <section
      id="about"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 left-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-100/80 border border-emerald-500/30 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-300 tracking-wide">
                Available for Software Engineer & Full Stack Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm md:text-base font-mono uppercase tracking-widest text-cyan-400">
                Full Stack Developer & MERN Architect
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I&apos;m <span className="gradient-text">Anand Ahire</span>
              </h1>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Aspiring Software Engineer specializing in scalable web systems using the{" "}
              <strong className="text-cyan-300 font-semibold">MERN Stack (MongoDB, Express, React, Node.js)</strong>,{" "}
              <strong className="text-violet-300 font-semibold">TypeScript</strong>, and{" "}
              <strong className="text-white font-semibold">Next.js</strong>. Experienced in designing RESTful APIs,
              JWT/OAuth authentication, and building intelligent features with the{" "}
              <strong className="text-cyan-300 font-semibold">Google Gemini AI API</strong>.
            </p>

            {/* Contact Quick Meta */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Pune, India
              </span>
              <span className="text-slate-600">•</span>
              <a
                href="mailto:anandsahire8595@gmail.com"
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                anandsahire8595@gmail.com
              </a>
              <span className="text-slate-600">•</span>
              <a
                href="tel:+919356048168"
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                +91 9356048168
              </a>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Featured Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <button
                type="button"
                onClick={handleViewResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 hover:border-cyan-300 shadow-lg shadow-cyan-500/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              <a
                href="/Anand_Ahire_Resume.pdf"
                download="Anand_Ahire_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-surface-100 hover:bg-surface-200 border border-white/10 hover:border-cyan-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/Anand8595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface-100 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anand-ahire-142519307/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface-100 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Anand's Photo + Floating Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-[300px] sm:w-[350px] md:w-[380px]">
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-violet-600 opacity-60 blur-xl animate-pulse-glow" />

              {/* Photo Frame Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-[#0c1322] shadow-2xl aspect-[4/5]">
                <Image
                  src="/anand-ahire.jpg"
                  alt="Anand Ahire - Full Stack MERN Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 300px, 380px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle gradient overlay at bottom for sleek blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#080c14]/80 backdrop-blur-md border border-white/10 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-sm">Anand Ahire</p>
                      <p className="text-cyan-400 text-xs font-mono">B.E. Computer Engineering</p>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: MERN Stack */}
              <div className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl bg-surface-100/90 backdrop-blur-xl border border-cyan-500/30 shadow-xl flex items-center gap-2.5 animate-float">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">MERN Specialist</p>
                  <p className="text-[10px] text-slate-400">Next.js & TypeScript</p>
                </div>
              </div>

              {/* Floating Badge 2: AI Integrations */}
              <div className="absolute top-1/2 -right-4 sm:-right-8 px-3.5 py-2 rounded-2xl bg-surface-100/90 backdrop-blur-xl border border-violet-500/30 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Gemini AI Integrator</p>
                  <p className="text-[10px] text-slate-400">LLM Prompt Pipelines</p>
                </div>
              </div>

              {/* Floating Badge 3: 3+ Internships */}
              <div className="absolute -bottom-4 -left-2 px-3.5 py-2 rounded-2xl bg-surface-100/90 backdrop-blur-xl border border-emerald-500/30 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">3+ Internships</p>
                  <p className="text-[10px] text-slate-400">Paarsh • Next Level • Codesoft</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantifiable Impact Stats Bar */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-2xl bg-surface-50/50 border border-white/5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              5+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Full-Stack Modules Built
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Paarsh Infotech & Next Level</div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-50/50 border border-white/5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">
              30%
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              API Response Handling Speedup
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Optimized RESTful controllers</div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-50/50 border border-white/5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              20%
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Dev Time Reduced
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Next Level Computech Solutions</div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-50/50 border border-white/5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              100+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Endpoints Secured
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">JWT & Google OAuth 2.0 Auth</div>
          </div>
        </div>
      </div>

      {/* Interactive Resume Viewer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
