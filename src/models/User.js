import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, default: "pharmacist" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
