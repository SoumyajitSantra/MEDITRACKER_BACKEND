import Supplier from "../models/Supplier.js";

export const createSupplier = async (req, res) => {
  const doc = await Supplier.create(req.body);
  res.status(201).json(doc);
};

export const listSuppliers = async (req, res) => {
  const docs = await Supplier.find().sort({ name: 1 });
  res.json(docs);
};
