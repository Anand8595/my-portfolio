import { Schema, model, Document } from "mongoose";

export interface IProject extends Document {
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
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["Full Stack", "Frontend", "Backend", "Cloud / DevOps"],
      default: "Full Stack",
    },
    techStack: [{ type: String, required: true }],
    featured: { type: Boolean, default: false },
    liveUrl: { type: String, default: "" },
    githubUrl: { type: String, default: "" },
    imageUrl: { type: String, required: true },
    metrics: [
      {
        label: { type: String },
        value: { type: String },
      },
    ],
    highlights: [{ type: String }],
  },
  { timestamps: true }
);

export const Project = model<IProject>("Project", ProjectSchema);
