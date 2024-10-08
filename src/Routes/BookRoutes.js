import express from "express";
import booksController from "../controllers/booksController.js";
import {
  idNotFound,
  bookIndex,
  bookSchema,
  updateBookSchema,
} from "../validation/bookValidation.js";

import validate from "../middleware/validationMiddleware.js";

const router = express.Router();

// FOR GET ALL BOOKS DATA
router.get("/books", booksController.getAllBooks);

// FOR GET SINGLE BOOK DATA BY ID
router.get("/book/:id", idNotFound, booksController.getSingleBook);

// FOR POST/CREATE SINGLE BOOK DATA
router.post("/books", validate(bookSchema), booksController.addSingleBook);

// FOR UPDATE SINGLE BOOK DATA USING PUT
router.put(
  "/book/:id",
  // validate(updateBookSchema),
  bookIndex,
  booksController.updateSingleBook
);

// FOR DELETE SINGLE BOOK DATA USING DELETE
router.delete("/book/:id", bookIndex, booksController.deleteSingleBook);

export default router;
