import express from "express";
import booksController from "../controllers/booksController.js";

const router = express.Router();

// FOR GET ALL BOOKS DATA
router.get("/books", booksController.getAllBooks);

// FOR GET SINGLE BOOK DATA BY ID
router.get("/book/:id", booksController.getSingleBook);

// FOR POST/CREATE SINGLE BOOK DATA
router.post("/books", booksController.addSingleBook);

// FOR UPDATE SINGLE BOOK DATA USING PUT
router.put("/book/:id", booksController.updateSingleBook);

// FOR DELETE SINGLE BOOK DATA USING DELETE
router.delete("/book/:id", booksController.deleteSingleBook);

export default router;
