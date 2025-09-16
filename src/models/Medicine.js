import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  expiryDate: { type: Date },
  supplier: String,
  category: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Medicine", medicineSchema);
