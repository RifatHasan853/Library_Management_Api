import { Response } from "express";

export const handleError = (res: Response, error: any) => {
  if (error.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      error,
    });
  }
  res.status(500).json({
    success: false,
    message: error.message || "Internal Server Error",
    error,
  });
};
