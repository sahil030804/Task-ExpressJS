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

// FOR POST/CREATE SINGLE BOOK DATA
router.post("/", (req, res) => {
  let { name, price } = req.body;

  let newBook = {
    id: books.length + 1,
    name: name,
    price: parseFloat(price),
  };

  // check name & price is written and if not give error of Please Enter Book Name & Book Rate
  if (!name && !price) {
    return res
      .status(400)
      .json({ error: "Please Enter Book Name & Book Price" });
  }

  // check name is written and if not give error if Please Enter Book Name
  if (!name) {
    return res.status(400).json({ error: "Please Enter Book Name" });
  }

  // check price is written and if not give error if Please Enter Book Rate
  if (!price) {
    return res.status(400).json({ error: "Please Enter Book Price" });
  }

  // check price is not a number and if not give error if Book price must be digits
  if (isNaN(Object.values(newBook)[2])) {
    // it checks book_rate is not number
    return res.status(400).json({ error: "Book Price must be digits" });
  }

  books.push(newBook); //push new book data to books object
  res.status(200).json(newBook);
});

export default router;
