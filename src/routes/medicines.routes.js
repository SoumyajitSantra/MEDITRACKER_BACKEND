import express from "express";
import { createMedicine, listMedicines, updateMedicine, deleteMedicine } from "../controllers/medicines.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/", requireAuth, listMedicines);
router.post("/", requireAuth, createMedicine);
router.put("/:id", requireAuth, updateMedicine);
router.delete("/:id", requireAuth, deleteMedicine);

export default router;
