import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db";
import { Project } from "./models/Project";
import { initialProjects } from "./data/mockProjects";
import mongoose from "mongoose";

const seedDatabase = async () => {
  try {
    const connected = await connectDB();
    if (!connected) {
      console.log("Could not connect to MongoDB. Seeding aborted.");
      process.exit(1);
    }

    console.log("Clearing existing projects...");
    await Project.deleteMany({});

    console.log(`Inserting ${initialProjects.length} initial projects...`);
    await Project.insertMany(initialProjects);

    console.log("Database successfully seeded!");
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();
