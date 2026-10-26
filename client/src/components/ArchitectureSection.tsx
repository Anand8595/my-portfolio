"use client";

import React, { useState } from "react";
import {
  Layers,
  ArrowRight,
  Server,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
  Code2,
  Workflow,
  Sparkles,
} from "lucide-react";

interface Step {
  id: string;
  name: string;
  tech: string;
  role: string;
  details: string[];
}

const FLOWS = {
  notes: {
    title: "AI Notes Generation Flow (ExamEdge AI)",
    steps: [
      {
        id: "1",
        name: "Next.js 16 Client",
        tech: "React 19 • TypeScript • Tailwind",
        role: "Student inputs topic or syllabus and triggers prompt generation",
        details: [
          "Optimistic UI updates with instant loading spinners",
          "Client-side input sanitization and character length bounds",
          "JWT session token attached in Authorization header",
        ],
      },
      {
        id: "2",
        name: "Express.js API Gateway",
        tech: "Node.js • Express 5 • TypeScript",
        role: "Validates JWT, verifies user quota, dispatches prompt",
        details: [
          "CORS policy restriction to trusted origins",
          "JWT authentication middleware verifying token integrity",
          "Async error handling with structured JSON responses",
        ],
      },
      {
        id: "3",
        name: "Gemini AI Engine",
        tech: "Google Gemini API • Prompt Engine",
        role: "Synthesizes structured, exam-oriented revision notes",
        details: [
          "Specialized prompt engineering for bullet points, definitions & questions",
          "Contextual token optimization to maintain sub-1.5s latency",
          "Format validation ensuring markdown readability",
        ],
      },
      {
        id: "4",
        name: "MongoDB Persistence",
        tech: "MongoDB • Mongoose ODM",
        role: "Saves generated notes to user history collection",
        details: [
          "Mongoose schema indexing on userId and createdAt",
          "Instant retrieval pipeline for fast revision history",
          "Downloadable PDF/markdown serialization",
        ],
      },
    ],
  },
  portfolio: {
    title: "Portfolio Client-Server API Flow",
    steps: [
      {
        id: "1",
        name: "Next.js Frontend",
        tech: "Next.js App Router • TypeScript",
        role: "Fetches live projects and dispatches contact inquiries",
        details: [
          "Non-blocking client-side fetch with fallback resilience",
          "Interactive category and tech stack filtering",
          "Real-time health check status pill in header",
        ],
      },
      {
        id: "2",
        name: "Express.js Server",
        tech: "Express 5 • TypeScript • CORS",
        role: "Handles /api/projects and /api/messages routes",
        details: [
          "Strict TypeScript request and response typing",
          "Email regex validation for contact form inquiries",
          "Graceful fallback to in-memory store if DB is offline",
        ],
      },
      {
        id: "3",
        name: "Database Layer",
        tech: "MongoDB • In-Memory Fallback",
        role: "Stores incoming contact inquiries and project catalog",
        details: [
          "High-res metrics and highlight metadata persistence",
          "Timestamped logging of received inquiries",
          "Auto-reconnect with timeout thresholds",
        ],
      },
    ],
  },
};

export default function ArchitectureSection() {
  const [activeFlow, setActiveFlow] = useState<"notes" | "portfolio">("notes");
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentFlow = FLOWS[activeFlow];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Workflow className="w-3.5 h-3.5" />
            <span>Full-Stack System Design</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            MERN & Next.js <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            How Anand architects modern web systems by decoupling front-end presentation,
            REST API services, AI orchestration pipelines, and document persistence layers.
          </p>
        </div>

        {/* Flow Selector Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-surface-100 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => {
                setActiveFlow("notes");
                setActiveStep(0);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFlow === "notes"
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Notes Generation Pipeline</span>
            </button>
            <button
              onClick={() => {
                setActiveFlow("portfolio");
                setActiveStep(0);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFlow === "portfolio"
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>MERN Stack API Pipeline</span>
            </button>
          </div>
        </div>

        {/* Steps Flow Timeline */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {currentFlow.steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 relative ${
                  isSelected
                    ? "bg-surface-50 border-cyan-500/60 shadow-lg shadow-cyan-500/10 -translate-y-1"
                    : "bg-surface-50/50 border-white/5 hover:border-white/20 hover:bg-surface-50/80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                      isSelected
                        ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white"
                        : "bg-surface-100 text-slate-400"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-400">
                    Step {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mt-3">
                  {step.name}
                </h3>
                <p className="text-xs text-cyan-400/90 font-mono mt-0.5">
                  {step.tech}
                </p>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                  {step.role}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-surface-50/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                Step 0{activeStep + 1} Detailed Breakdown
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {currentFlow.steps[activeStep].name}
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                {currentFlow.steps[activeStep].role}
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-surface-100 border border-white/10 text-cyan-300 text-xs font-mono">
              {currentFlow.steps[activeStep].tech}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentFlow.steps[activeStep].details.map((detail, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-surface-100/60 border border-white/5 flex items-start gap-3"
              >
                <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
