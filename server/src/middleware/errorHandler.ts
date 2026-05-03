import { Request, Response } from "express";

interface CustomError extends Error {
  statusCode?: number;
}

const errorHandler = (err: CustomError, req: Request, res: Response): void => {
  console.error("Unhandled Error:", err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default errorHandler;
