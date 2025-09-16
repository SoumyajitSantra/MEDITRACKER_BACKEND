import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  address: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Supplier", supplierSchema);
