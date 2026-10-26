"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { fetchProjects } from "@/lib/api";
import ProjectModal from "./ProjectModal";
import {
  ExternalLink,
  Search,
  Sparkles,
  Info,
  Layers,
  X,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

const CATEGORIES = ["All", "Full Stack", "Frontend", "Cloud / DevOps"];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState<string>("server");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchProjects({
      category: activeCategory !== "All" ? activeCategory : undefined,
      search: searchQuery || undefined,
    }).then((res) => {
      if (isMounted) {
        setProjects(res.projects);
        setDataSource(res.source);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [activeCategory, searchQuery]);

  const handleTechClick = (tech: string) => {
    setSearchQuery(tech);
  };

  const handleClearFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world web applications built with the MERN stack, TypeScript, and Google Gemini AI.
            Filter by domain or search for specific technologies to inspect architectural details.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 rounded-2xl bg-surface-50/70 border border-white/10 backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech (e.g. Gemini, MongoDB, Next.js)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-surface-100 border border-white/10 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Meta Indicator */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono px-1">
          <div>
            Showing <span className="text-white font-semibold">{projects.length}</span> projects
            {activeCategory !== "All" && (
              <span> in <span className="text-cyan-400">{activeCategory}</span></span>
            )}
            {searchQuery && (
              <span> matching &ldquo;<span className="text-violet-400">{searchQuery}</span>&rdquo;</span>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>API {dataSource === "server" || dataSource === "in-memory" ? "Synchronized" : "Cached"}</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        {loading ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="h-96 rounded-3xl bg-surface-50/50 border border-white/5 animate-pulse p-6 flex flex-col justify-between"
              >
                <div className="h-44 bg-surface-100 rounded-2xl" />
                <div className="space-y-3">
                  <div className="h-5 bg-surface-100 rounded w-2/3" />
                  <div className="h-4 bg-surface-100 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="mt-16 text-center p-12 rounded-3xl bg-surface-50/30 border border-white/10 max-w-lg mx-auto space-y-4">
            <Layers className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="text-lg font-bold text-white">No projects found</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              No projects match your current category and search query. Try clearing your filters.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-surface-100 hover:bg-surface-200 border border-white/10 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project._id}
                className="group relative rounded-3xl overflow-hidden bg-surface-50/70 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
              >
                {/* Image Banner */}
                <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-slate-900">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent" />

                  {/* Badges Overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-cyan-500/40 text-cyan-300">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-violet-500/30 backdrop-blur-md border border-violet-500/50 text-violet-300 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-cyan-400/90 font-mono">
                      {project.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed pt-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics preview */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-surface-100/60 border border-white/5">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-sm font-bold text-white gradient-text">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack tags (clickable to filter) */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => handleTechClick(tech)}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-slate-300 bg-surface-100 hover:bg-surface-200 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-all"
                        title={`Filter by ${tech}`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-sm shadow-cyan-500/20 transition-all hover:scale-105"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-105"
                          title="GitHub Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 transition-all"
                    >
                      <span>Deep Dive</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Deep Dive Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
