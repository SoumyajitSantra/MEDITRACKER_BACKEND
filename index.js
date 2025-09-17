import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import medicinesRoutes from "./src/routes/medicines.routes.js";
import salesRoutes from "./src/routes/sales.routes.js";
import ordersRoutes from "./src/routes/orders.routes.js";
import suppliersRoutes from "./src/routes/suppliers.routes.js";
import { errorHandler } from "./src/middleware/error.middleware.js";

dotenv.config();
const app = express();

// DB connection
connectDB();

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN || "*", credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/medicines", medicinesRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/suppliers", suppliersRoutes);

app.get("/api/health", (req, res) => res.json({ ok: true, ts: Date.now() }));

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
