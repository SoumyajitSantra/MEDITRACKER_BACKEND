// src/controllers/medicines.controller.js
import Medicine from "../models/Medicine.js";

// ✅ GET all medicines
export const listMedicines = async (req, res) => {
  try {
    const meds = await Medicine.find().sort({ createdAt: -1 });
    res.json(meds);
  } catch (err) {
    res.status(500).json({ message: "Error fetching medicines", error: err.message });
  }
};

// ✅ POST create a new medicine
export const createMedicine = async (req, res) => {
  try {
    const med = await Medicine.create(req.body);
    res.status(201).json(med);
  } catch (err) {
    res.status(400).json({ message: "Error creating medicine", error: err.message });
  }
};

// ✅ PUT update medicine by ID
export const updateMedicine = async (req, res) => {
  try {
    const med = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!med) return res.status(404).json({ message: "Medicine not found" });
    res.json(med);
  } catch (err) {
    res.status(400).json({ message: "Error updating medicine", error: err.message });
  }
};

// ✅ DELETE medicine by ID
export const deleteMedicine = async (req, res) => {
  try {
    const med = await Medicine.findByIdAndDelete(req.params.id);
    if (!med) return res.status(404).json({ message: "Medicine not found" });
    res.json({ message: "Medicine deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting medicine", error: err.message });
  }
};
