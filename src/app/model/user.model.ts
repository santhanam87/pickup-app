import mongoose from "mongoose";

export const UserSChema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default (mongoose.models.User as mongoose.Model<unknown>) ||
  mongoose.model("User", UserSChema);
