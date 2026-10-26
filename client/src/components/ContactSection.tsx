"use client";

import React, { useState } from "react";
import { submitContactMessage } from "@/lib/api";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  FileDown,
  Eye,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/Icons";
import ResumeModal from "@/components/ResumeModal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields (Name, Email, Message).",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await submitContactMessage(formData);
      if (res.success) {
        setStatus({
          type: "success",
          message:
            res.message ||
            "Thank you! Your message has been sent successfully. Anand will get in touch with you shortly.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: res.message || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070b13]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Send className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in hiring Anand for a Full Stack / MERN developer role, collaborating on an
            innovative project, or discussing engineering architectures? Send a message directly.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-surface-50/80 border border-white/10 backdrop-blur-xl shadow-2xl space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Direct Contact</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Reach out directly via email, phone, or connect on professional platforms.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:anandsahire8595@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface-100 hover:bg-surface-200 border border-white/5 hover:border-cyan-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase text-slate-400">Email</p>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    anandsahire8595@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919356048168"
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface-100 hover:bg-surface-200 border border-white/5 hover:border-cyan-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase text-slate-400">Phone</p>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    +91 9356048168
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-100 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase text-slate-400">Location</p>
                  <p className="text-sm font-semibold text-white">Pune, Maharashtra, India (411052)</p>
                </div>
              </div>
            </div>

            {/* Social Links & Resume Download */}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <p className="text-xs font-mono uppercase text-slate-400">Professional Networks</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Anand8595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/10 text-slate-300 hover:text-white transition-all text-xs font-semibold"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/anand-ahire-142519307/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/10 text-slate-300 hover:text-white transition-all text-xs font-semibold"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsResumeOpen(true)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Resume</span>
                </button>

                <a
                  href="/Anand_Ahire_Resume.pdf"
                  download="Anand_Ahire_Resume.pdf"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/10 text-slate-300 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  <FileDown className="w-4 h-4 text-cyan-400" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-surface-50/80 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Have a question or opportunity? Send a message and Anand will respond shortly.
              </p>
            </div>

            {/* Status alerts */}
            {status.type === "success" && (
              <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-start gap-3 text-emerald-300 text-xs sm:text-sm animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                <span>{status.message}</span>
              </div>
            )}

            {status.type === "error" && (
              <div className="p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-start gap-3 text-rose-300 text-xs sm:text-sm animate-in fade-in">
                <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 uppercase">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 uppercase">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 uppercase">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full Stack Developer Opening / Project Proposal"
                  className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 uppercase">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about the role, team, or project..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Interactive Resume Viewer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
