"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#05080e] text-slate-400 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <Link href="#" className="font-mono font-bold text-xl text-white">
              Anand<span className="text-cyan-400">.dev</span>
            </Link>
            <p className="text-xs text-slate-400 font-mono">
              Full Stack MERN Developer • TypeScript • Next.js
            </p>
          </div>

          {/* Quick Section Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#architecture" className="hover:text-cyan-400 transition-colors">
              Architecture
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all hover:-translate-y-0.5"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} Anand Ahire. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Anand8595"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/anand-ahire-142519307/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:anandsahire8595@gmail.com"
              className="hover:text-cyan-400 transition-colors"
              title="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="flex items-center gap-1">
            Built with Next.js 16, TypeScript & Express
          </p>
        </div>
      </div>
    </footer>
  );
}
