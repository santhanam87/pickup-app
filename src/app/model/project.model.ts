import mongoose from "mongoose";

export const projectsSChema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    manegerUsername: { type: String, required: true },
  },
  { timestamps: true }
);

export default (mongoose.models.User as mongoose.Model<unknown>) ||
  mongoose.model("projects", projectsSChema);
