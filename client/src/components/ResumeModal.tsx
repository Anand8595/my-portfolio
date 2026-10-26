"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, FileDown, Eye, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-5xl h-[92vh] max-h-[92vh] rounded-3xl bg-[#0b111e] border border-white/15 shadow-2xl text-white z-10 flex flex-col overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-surface-50/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Anand Ahire - Resume</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  PDF Preview
                </span>
              </h3>
              <p className="text-xs text-slate-400 hidden sm:block">
                Full Stack MERN Developer • Pune, Maharashtra, India
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Open In New Tab */}
            <a
              href="/Anand_Ahire_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/10 text-xs font-medium text-slate-200 hover:text-cyan-300 transition-all"
              title="Open full PDF in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            {/* Download PDF */}
            <a
              href="/Anand_Ahire_Resume.pdf"
              download="Anand_Ahire_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-xs font-medium text-white shadow-md shadow-cyan-500/20 transition-all"
              title="Download PDF to your computer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
              aria-label="Close Resume Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Frame Viewer */}
        <div className="flex-1 w-full bg-[#070a12] p-2 sm:p-4 overflow-hidden relative flex flex-col">
          <iframe
            src="/Anand_Ahire_Resume.pdf#toolbar=1"
            className="w-full h-full rounded-2xl border border-white/10 bg-[#0f172a]"
            title="Anand Ahire Official Resume"
          />

          {/* Fallback info bar for mobile browsers where iframe PDF might not render directly */}
          <div className="mt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
            <span>Trouble viewing inside preview?</span>
            <a
              href="/Anand_Ahire_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline font-medium inline-flex items-center gap-1"
            >
              <Eye className="w-3 h-3" />
              <span>Click to view directly</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
