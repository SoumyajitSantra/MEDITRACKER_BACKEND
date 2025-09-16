import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: String,
  address: String,
  phone: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Branch", branchSchema);
