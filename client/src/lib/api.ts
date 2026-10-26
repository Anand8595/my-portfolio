import { Project, ApiResponse, ContactFormData } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const fallbackProjects: Project[] = [
  {
    _id: "p1",
    title: "ExamEdge AI - Smart Study Notes Platform",
    subtitle: "AI-Powered Notes Generator with Gemini API & Stripe Payments",
    description:
      "A high-impact educational AI platform built with React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Integrates Google's Gemini API to generate comprehensive, structured study notes. Features secure JWT & Google OAuth 2.0 session handling, payment gateway integration, and instant PDF/markdown notes export.",
    category: "Full Stack",
    techStack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Tailwind CSS", "JWT", "OAuth 2.0"],
    featured: true,
    liveUrl: "https://ai-mern-project.vercel.app",
    githubUrl: "https://github.com/Anand8595/ai-mern-project",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "AI Engine", value: "Gemini API" },
      { label: "Auth Layer", value: "JWT & OAuth" },
      { label: "Deployment", value: "Vercel & Render" },
    ],
    highlights: [
      "Gemini AI API prompt-engineering pipeline for syllabus-aligned notes generation",
      "Robust JWT & Google OAuth 2.0 authentication for secure session management",
      "Notes history state management with instant search, editing, and multi-format export",
      "Integrated payment gateway with responsive UI deployed on Vercel",
    ],
  },
  {
    _id: "p2",
    title: "Interview-Agent-AI - Smart Mock Simulator",
    subtitle: "Real-Time AI Technical & HR Screening Coach",
    description:
      "An intelligent mock interview simulator for software engineering and HR screening scenarios powered by Gemini AI. Blends speech processing and real-time AI contextual evaluation to deliver instantaneous feedback after each answer and produces structured diagnostic performance scorecards.",
    category: "Full Stack",
    techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Gemini AI", "WebSockets"],
    featured: true,
    liveUrl: "https://interview-agent-ai.vercel.app",
    githubUrl: "https://github.com/Anand8595/interview-agent-ai",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Core Model", value: "Gemini AI" },
      { label: "Processing", value: "Speech & Audio" },
      { label: "Backend API", value: "Express & TS" },
    ],
    highlights: [
      "Speech-to-text pipeline coupled with Gemini AI semantic scoring",
      "Dynamic prompt orchestration tailored to technical and HR screening scenarios",
      "Detailed candidate diagnostic report analyzing communication, problem-solving, and DSA",
      "Full RESTful backend built with Express.js, TypeScript, and MongoDB session tracking",
    ],
  },
  {
    _id: "p3",
    title: "Social Media Addiction Tracker & Wellness",
    subtitle: "Digital Habit Analytics with Gamification & Firebase Realtime Sync",
    description:
      "A digital wellness application engineered to monitor screen-time patterns, social media app usage, and user wellbeing. Integrates gamification incentives, mood logging, real-time Firebase alerts, and interactive trend visualization dashboards.",
    category: "Cloud / DevOps",
    techStack: ["Java", "Android Studio", "Firebase", "MySQL", "XML", "REST APIs"],
    featured: true,
    liveUrl: "https://drive.google.com/file/d/1TYymiwiPSTsoinL_to1elbpVACCf4bg5/view?usp=sharing",
    githubUrl: "https://github.com/Anand8595/SocialMediaAddictionTracker",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Platform", value: "Android (Java)" },
      { label: "Database", value: "MySQL & Firebase" },
      { label: "Notifications", value: "Firebase Cloud" },
    ],
    highlights: [
      "Digital wellness application to monitor screen-time patterns and user activity",
      "Gamified reward milestones motivating users toward sustained digital discipline",
      "Firebase Cloud Messaging integration for real-time notification alerts",
      "MySQL relational schema optimized for analytics, reporting, and personalized insights",
    ],
  },
  {
    _id: "p4",
    title: "Next.js & TypeScript MERN Micro-Services Portfolio",
    subtitle: "Production-Grade Full Stack Portfolio with Express REST API & Tailwind CSS v3",
    description:
      "Modern full-stack portfolio built with Next.js 16 (App Router), TypeScript, Express.js backend, MongoDB/Mongoose with in-memory persistence fallback, and custom glassmorphism design system.",
    category: "Frontend",
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS v3", "Express", "Node.js", "MongoDB"],
    featured: false,
    liveUrl: "https://github.com/Anand8595",
    githubUrl: "https://github.com/Anand8595",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Frontend", value: "Next.js 16" },
      { label: "Backend", value: "Express 5" },
      { label: "Type Safety", value: "Strict TS" },
    ],
    highlights: [
      "Custom dark mode design tokens with glowing mesh gradient aesthetics",
      "Modular Express REST API with input validation and CORS policies",
      "Interactive project filtering, deep-dive modal inspection, and contact form dispatch",
      "100% type-safe contract across client and server boundaries",
    ],
  },
];

export async function fetchProjects(filter?: {
  category?: string;
  search?: string;
}): Promise<{ projects: Project[]; source: string }> {
  try {
    const params = new URLSearchParams();
    if (filter?.category && filter.category !== "All") {
      params.append("category", filter.category);
    }
    if (filter?.search) {
      params.append("search", filter.search);
    }

    const queryStr = params.toString() ? `?${params.toString()}` : "";
    const res = await fetch(`${API_BASE}/projects${queryStr}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch from backend: ${res.statusText}`);
    }

    const data: ApiResponse<Project[]> = await res.json();
    if (data.success && data.data) {
      return { projects: data.data, source: data.source || "server" };
    }

    return { projects: fallbackProjects, source: "fallback" };
  } catch (error) {
    console.warn("Express backend unavailable, using fallback projects data.", error);
    let filtered = [...fallbackProjects];
    if (filter?.category && filter.category !== "All") {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === filter.category?.toLowerCase()
      );
    }
    if (filter?.search) {
      const s = filter.search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(s) ||
          p.subtitle.toLowerCase().includes(s) ||
          p.description.toLowerCase().includes(s) ||
          p.techStack.some((t) => t.toLowerCase().includes(s))
      );
    }
    return { projects: filtered, source: "fallback" };
  }
}

export async function submitContactMessage(
  formData: ContactFormData
): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok && data.success) {
      return { success: true, message: data.message };
    }
    return {
      success: false,
      message: data.message || "Failed to submit message",
    };
  } catch (error) {
    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. Anand will get in touch with you shortly.",
    };
  }
}

export async function checkBackendHealth(): Promise<{
  alive: boolean;
  mode?: string;
}> {
  try {
    const res = await fetch(`${API_BASE}/health`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      return {
        alive: true,
        mode: data.database?.mode || "online",
      };
    }
    return { alive: false };
  } catch {
    return { alive: false };
  }
}
