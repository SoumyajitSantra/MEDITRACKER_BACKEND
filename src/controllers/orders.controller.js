import OrderRequest from "../models/OrderRequest.js";
import Medicine from "../models/Medicine.js";

export const createOrderRequest = async (req, res) => {
  const { medicineId, quantityRequested, supplier } = req.body;
  const med = await Medicine.findById(medicineId);
  const doc = await OrderRequest.create({
    medicineId,
    medicineName: med ? med.name : "Unknown",
    quantityRequested,
    supplier
  });
  res.status(201).json(doc);
};

export const listOrders = async (req, res) => {
  const items = await OrderRequest.find().sort({ createdAt: -1 });
  res.json(items);
};

export const updateOrderStatus = async (req, res) => {
  const updated = await OrderRequest.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json(updated);
};
