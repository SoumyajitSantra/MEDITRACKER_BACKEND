import mongoose from "mongoose";

const orderRequestSchema = new mongoose.Schema({
  medicineId: { type: mongoose.Schema.Types.ObjectId, ref: "Medicine" },
  medicineName: String,
  quantityRequested: Number,
  supplier: String,
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("OrderRequest", orderRequestSchema);
