import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB, getDBStatus } from "./config/db";
import projectRoutes from "./routes/projectRoutes";
import messageRoutes from "./routes/messageRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests from localhost or no origin (e.g. mobile apps, curl)
      callback(null, true);
    },
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);

// Health check endpoint
app.get("/api/health", (_req, res) => {
  const db = getDBStatus();
  res.json({
    status: "ok",
    service: "mern-portfolio-api",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: {
      connected: db.connected,
      mode: db.connected ? "mongodb" : "in-memory fallback",
    },
  });
});

// Root welcome route
app.get("/", (_req, res) => {
  res.json({
    message: "Welcome to MERN Portfolio Backend API",
    endpoints: {
      health: "/api/health",
      projects: "/api/projects",
      messages: "/api/messages",
    },
  });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Start server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`[Server] Portfolio API listening on http://localhost:${PORT}`);
    console.log(`[Server] Health check: http://localhost:${PORT}/api/health`);
    console.log(`[Server] Projects API: http://localhost:${PORT}/api/projects`);
  });
};

startServer();
