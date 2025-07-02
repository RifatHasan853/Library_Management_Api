import cors from "cors";
import express from "express";

import bookRoutes from "./Routes/book.routes";
import borrowRoutes from "./Routes/borrow.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowRoutes);

export default app;
