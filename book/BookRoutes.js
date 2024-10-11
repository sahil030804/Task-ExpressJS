import express from "express";
import booksController from "./booksController.js";
import { bookSchema, updateBookSchema } from "./bookValidation.js";
import validate, { idNotFound } from "../middleware/validationMiddleware.js";

const router = express.Router();

// FOR GET ALL BOOKS DATA
router.get("/all-books", booksController.getAllBooks);

// FOR GET SINGLE BOOK DATA BY ID
router.get(
  "/:id",
  idNotFound, //first check id is found or not
  booksController.getSingleBook // then run original logic
); 

// FOR POST/CREATE SINGLE BOOK DATA
router.post("/add-book", validate(bookSchema), booksController.addSingleBook);

// FOR UPDATE SINGLE BOOK DATA USING PUT
router.put(
  "/:id",
  idNotFound, //first check id is found or not
  validate(updateBookSchema), // then check validation
  booksController.updateSingleBook // then run original logic
);

// FOR DELETE SINGLE BOOK DATA USING DELETE
router.delete(
  "/:id",
  idNotFound, //first check id is found or not
  booksController.deleteSingleBook // then run original logic
); 

export default router;
