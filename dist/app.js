"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const book_routes_1 = __importDefault(require("./Routes/book.routes"));
const borrow_routes_1 = __importDefault(require("./Routes/borrow.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/books", book_routes_1.default);
app.use("/api/borrow", borrow_routes_1.default);
exports.default = app;
