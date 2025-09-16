import express from "express";
import { createSupplier, listSuppliers } from "../controllers/suppliers.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/", requireAuth, listSuppliers);
router.post("/", requireAuth, createSupplier);

export default router;
