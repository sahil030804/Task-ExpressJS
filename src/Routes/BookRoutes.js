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

// FOR GET SINGLE BOOK DATA BY ID
router.get("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let book = books.find((book) => book.id === id);

  if (book) {
    return res.status(200).json(book);
  }

  res.status(404).json({ error: "User not found" });
});

export default router;
