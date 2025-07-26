import mongoose, { Schema } from "mongoose";

export const PageSChema = new mongoose.Schema(
  {
    pageId: { type: String, required: true },
    tabRange: { type: String, required: true },
    columnIndex: { type: Number, required: true },
    pageName: { type: String, required: true },
    users: { type: [Schema.Types.ObjectId], ref: "User" },
  },
  { timestamps: true }
);

export default (mongoose.models.Page as mongoose.Model<unknown>) ||
  mongoose.model("Page", PageSChema);
