import express from "express";
import { createOrderRequest, listOrders, updateOrderStatus } from "../controllers/orders.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/", requireAuth, listOrders);
router.post("/", requireAuth, createOrderRequest);
router.put("/:id/status", requireAuth, updateOrderStatus);

export default router;
