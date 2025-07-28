import mongoose from "mongoose";

export const sprintsSChema = new mongoose.Schema(
  {
    sprintName: { type: String, required: true },
    manegerUsername: { type: String, required: true },
    project_id: { type: Number, required: true },
  },
  { timestamps: true }
);

export default (mongoose.models.User as mongoose.Model<unknown>) ||
  mongoose.model("Sprints", sprintsSChema);
