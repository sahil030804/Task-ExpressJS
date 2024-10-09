import express from "express";
import booksController from "./booksController.js";

const router = express.Router();

// FOR GET ALL BOOKS DATA
router.get("/all-books", booksController.getAllBooks);

// FOR GET SINGLE BOOK DATA BY ID
router.get("/:id", booksController.getSingleBook);

// FOR POST/CREATE SINGLE BOOK DATA
router.post("/add-book", booksController.addSingleBook);

// FOR UPDATE SINGLE BOOK DATA USING PUT
router.put("/:id", booksController.updateSingleBook);

// FOR DELETE SINGLE BOOK DATA USING DELETE
router.delete("/:id", booksController.deleteSingleBook);

export default router;
