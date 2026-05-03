import cors from "cors";
import express, { Application, Request, Response } from "express";
import errorHandler from "./middleware/errorHandler.js";
import emailRoutes from "./routes/emailRoutes.js";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", emailRoutes);

// Root endpoint
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Portfolio Backend API is running" });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: "Resource not found" });
});

// Global Error Handler
app.use(errorHandler);

export default app;
