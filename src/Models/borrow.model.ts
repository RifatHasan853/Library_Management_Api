import { Schema, model } from "mongoose";
import { IBorrow } from "../Interfaces/borrow.interface";
import { Book } from "./book.model";

const borrowSchema = new Schema<IBorrow>(
  {
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    quantity: { type: Number, required: true, min: 1 },
    dueDate: { type: Date, required: true },
  },
  { timestamps: true }
);

// Pre-save Middleware to Deduct Copies
borrowSchema.pre("save", async function (next) {
  const book = await Book.findById(this.book);
  if (!book) return next(new Error("Book not found"));

  if (book.copies < this.quantity) {
    return next(new Error("Not enough copies available"));
  }

  book.copies -= this.quantity;
  book.updateAvailability();
  await book.save();
  next();
});

export const Borrow = model<IBorrow>("Borrow", borrowSchema);
