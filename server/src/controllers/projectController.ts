import { Request, Response } from "express";
import { Project } from "../models/Project";
import { initialProjects, ProjectData } from "../data/mockProjects";
import { getDBStatus } from "../config/db";

// In-memory fallback repository
let inMemoryProjects: ProjectData[] = initialProjects.map((p, index) => ({
  ...p,
  _id: `mem-${index + 1}`,
}));

export const getProjects = async (req: Request, res: Response) => {
  try {
    const { category, search, featured, tech } = req.query;
    const dbStatus = getDBStatus();

    if (dbStatus.connected) {
      const query: Record<string, unknown> = {};

      if (category && category !== "All") {
        query.category = category;
      }
      if (featured === "true") {
        query.featured = true;
      }
      if (tech) {
        query.techStack = { $in: [new RegExp(String(tech), "i")] };
      }
      if (search) {
        const searchRegex = new RegExp(String(search), "i");
        query.$or = [
          { title: searchRegex },
          { subtitle: searchRegex },
          { description: searchRegex },
          { techStack: searchRegex },
        ];
      }

      const projects = await Project.find(query).sort({ featured: -1, createdAt: -1 });
      return res.json({
        success: true,
        source: "mongodb",
        count: projects.length,
        data: projects,
      });
    }

    // Fallback in-memory filter
    let results = [...inMemoryProjects];

    if (category && category !== "All") {
      results = results.filter((p) => p.category.toLowerCase() === String(category).toLowerCase());
    }
    if (featured === "true") {
      results = results.filter((p) => p.featured);
    }
    if (tech) {
      results = results.filter((p) =>
        p.techStack.some((t) => t.toLowerCase().includes(String(tech).toLowerCase()))
      );
    }
    if (search) {
      const s = String(search).toLowerCase();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(s) ||
          p.subtitle.toLowerCase().includes(s) ||
          p.description.toLowerCase().includes(s) ||
          p.techStack.some((t) => t.toLowerCase().includes(s))
      );
    }

    return res.json({
      success: true,
      source: "in-memory",
      count: results.length,
      data: results,
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error fetching projects",
    });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dbStatus = getDBStatus();

    if (dbStatus.connected) {
      const project = await Project.findById(id);
      if (!project) {
        return res.status(404).json({ success: false, message: "Project not found" });
      }
      return res.json({ success: true, data: project });
    }

    const project = inMemoryProjects.find((p) => p._id === id);
    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }
    return res.json({ success: true, data: project });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error fetching project" });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const { title, subtitle, description, category, techStack, featured, liveUrl, githubUrl, imageUrl, metrics, highlights } = req.body;

    if (!title || !subtitle || !description) {
      return res.status(400).json({ success: false, message: "Title, subtitle, and description are required" });
    }

    const projectData = {
      title,
      subtitle,
      description,
      category: category || "Full Stack",
      techStack: Array.isArray(techStack) ? techStack : [],
      featured: Boolean(featured),
      liveUrl: liveUrl || "",
      githubUrl: githubUrl || "",
      imageUrl: imageUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      metrics: Array.isArray(metrics) ? metrics : [],
      highlights: Array.isArray(highlights) ? highlights : [],
    };

    const dbStatus = getDBStatus();
    if (dbStatus.connected) {
      const created = await Project.create(projectData);
      return res.status(201).json({ success: true, data: created });
    }

    const newProject: ProjectData = {
      ...projectData,
      _id: `mem-${Date.now()}`,
    };
    inMemoryProjects.unshift(newProject);
    return res.status(201).json({ success: true, source: "in-memory", data: newProject });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error creating project" });
  }
};
