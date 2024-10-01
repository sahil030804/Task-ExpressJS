import express from "express";

const router = express.Router();

let books = [
  { id: 1, name: "book 1", price: 999 },
  { id: 2, name: "book 2", price: 899 },
  { id: 3, name: "book 3", price: 1099 },
];

// FOR GET ALL BOOKS DATA
router.get("/api/books", (req, res) => {
  res.status(200).json(books);
});

export default router;
