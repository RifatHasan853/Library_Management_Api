import { Request, Response } from "express";
import { Book } from "../Models/book.model";
import { handleError } from "../middleware/errorHandler";

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.create(req.body);
    res
      .status(201)
      .json({
        success: true,
        message: "Book created successfully",
        data: book,
      });
  } catch (error) {
    handleError(res, error);
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const {
      filter,
      sortBy = "createdAt",
      sort = "asc",
      limit = "10",
    } = req.query;
    const query: any = filter ? { genre: filter } : {};

    const books = await Book.find(query)
      .sort({ [sortBy as string]: sort === "asc" ? 1 : -1 })
      .limit(parseInt(limit as string, 10));

    res.json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    handleError(res, error);
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (!book)
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    res.json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error) {
    handleError(res, error);
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
      new: true,
    });
    if (!book)
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    res.json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    await Book.findByIdAndDelete(req.params.bookId);
    res.json({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error) {
    handleError(res, error);
  }
};
