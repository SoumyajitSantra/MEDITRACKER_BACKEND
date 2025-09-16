import Sale from "../models/Sale.js";
import Medicine from "../models/Medicine.js";

export const createSale = async (req, res) => {
  const { items, customer } = req.body;
  if (!items || items.length === 0) return res.status(400).json({ message: "No items" });

  for (const it of items) {
    const med = await Medicine.findById(it.medicine);
    if (!med) return res.status(404).json({ message: `Medicine not found` });
    if (med.quantity < it.quantity) return res.status(400).json({ message: `Insufficient stock for ${med.name}` });
    med.quantity -= it.quantity;
    await med.save();
  }

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const sale = await Sale.create({ items, total, customer, createdBy: req.user?._id });

  res.status(201).json(sale);
};

export const listSales = async (req, res) => {
  const sales = await Sale.find().sort({ createdAt: -1 });
  res.json(sales);
};
