"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { checkBackendHealth } from "@/lib/api";
import {
  Menu,
  X,
  FileDown,
  Eye,
  Activity,
  Code2,
  Send,
  Layers,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [apiStatus, setApiStatus] = useState<"checking" | "online" | "offline">("checking");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    checkBackendHealth().then((res) => {
      setApiStatus(res.alive ? "online" : "offline");
    });
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: Code2 },
    { name: "Skills", href: "#skills", icon: Layers },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Architecture", href: "#architecture", icon: Activity },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Contact", href: "#contact", icon: Send },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080c14]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#080c14] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-cyan-400 text-lg">A</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                Anand<span className="text-cyan-400">.dev</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase -mt-1 font-mono">
                MERN • Next.js
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Backend Status */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Live API Health indicator */}
            <div
              className={`flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono border ${
                apiStatus === "online"
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                  : apiStatus === "checking"
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                  : "bg-slate-800 border-white/10 text-slate-400"
              }`}
              title="MERN Express & MongoDB Backend Health"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  apiStatus === "online"
                    ? "bg-emerald-400 animate-pulse"
                    : apiStatus === "checking"
                    ? "bg-amber-400 animate-ping"
                    : "bg-slate-400"
                }`}
              />
              <span>{apiStatus === "online" ? "API Live" : "API Standby"}</span>
            </div>

            {/* Social Links */}
            <a
              href="https://github.com/Anand8595"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface-50 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/anand-ahire-142519307/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface-50 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Resume CTA */}
            <a
              href="/Anand_Ahire_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <Eye className="w-4 h-4" />
              <span>View Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-surface-50 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Anand8595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-50 border border-white/10 text-slate-300"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anand-ahire-142519307/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-50 border border-white/10 text-slate-300"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              <a
                href="/Anand_Ahire_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 text-white"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
