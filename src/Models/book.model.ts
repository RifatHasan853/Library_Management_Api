// models/book.model.ts
import { model, Model, Schema } from "mongoose";
import { IBook, IBookMethods } from "../Interfaces/book.interface";

// Combine the interfaces for document
type BookModel = Model<IBook, {}, IBookMethods>;

const bookSchema = new Schema<IBook, BookModel>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      required: true,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Instance method
bookSchema.methods.updateAvailability = function () {
  this.available = this.copies > 0;
};

export const Book = model<IBook, BookModel>("Book", bookSchema);
