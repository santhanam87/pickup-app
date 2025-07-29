import mongoose from "mongoose";

export const taskesSChema = new mongoose.Schema(
  {
    taskName: { type: String, required: true },
    manegerUsername: { type: String, required: true },
    progect_id: { type: Number, required: true },
  },
  { timestamps: true }
);

export default (mongoose.models.Tasks as mongoose.Model<unknown>) ||
  mongoose.model("Tasks", taskesSChema);
