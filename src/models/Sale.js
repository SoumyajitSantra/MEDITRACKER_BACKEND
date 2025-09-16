import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  items: [
    {
      medicine: { type: mongoose.Schema.Types.ObjectId, ref: "Medicine" },
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  total: Number,
  customer: { phone: String, email: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Sale", saleSchema);
