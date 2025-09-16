import express from "express";
import { createSale, listSales } from "../controllers/sales.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/", requireAuth, listSales);
router.post("/", requireAuth, createSale);

export default router;
