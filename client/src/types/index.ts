export interface Project {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Cloud / DevOps";
  techStack: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  highlights: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  source?: string;
  count?: number;
}
