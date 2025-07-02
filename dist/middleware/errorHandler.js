"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (res, error) => {
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
exports.handleError = handleError;
