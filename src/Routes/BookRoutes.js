import express from "express";

const router = express.Router();

let books = [
  { id: 1, name: "book 1", price: 999 },
  { id: 2, name: "book 2", price: 899 },
  { id: 3, name: "book 3", price: 1099 },
];

// FOR GET ALL BOOKS DATA
router.get("/books", (req, res) => {
  res.status(200).json(books);
});

// FOR GET SINGLE BOOK DATA BY ID
router.get("/book/:id", (req, res) => {
  let id = req.params.id;
  let book = books.find((book) => book.id == id);

  if (book) {
    return res.status(200).json(book);
  }

  res.status(404).json({ error: "Book not found" });
});

// FOR POST/CREATE SINGLE BOOK DATA
router.post("/books", (req, res) => {
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

// FOR UPDATE SINGLE BOOK DATA USING PUT
router.put("/book/:id", (req, res) => {
  let { name, price } = req.body; // create variables from req.body

  let id = req.params.id;
  let bookIndex = books.findIndex((book) => book.id == id);
  console.log(books[bookIndex]);

  if (bookIndex === -1) {
    return res.status(400).json({ error: "Book id not found" });
  }

  if (name) {
    if (name.trim() === "") {
      return res.status(400).json({ error: "Book name can't be null / empty" });
    }
    books[bookIndex].name = name;
  }

  if (price) {
    if (isNaN(price)) {
      return res.status(400).json({ error: "Book price must be numbers" });
    }
    books[bookIndex].price = parseFloat(price);
  }

  res.status(200).json(books[bookIndex]);
});

// router.put("/:id", (req, res) => {
//   let id = parseInt(req.params.id); // Fetch id from url params
//   let book = books.find((book) => book.id === id); // find book which id is match with params id

//   let { name, price } = req.body; // create variables from req.body

//   // check Book is available or not for updating
//   if (!book) {
//     res.status(400).json({ error: "Book Not Found" });
//   }

//   // Check if name is provided and not an empty string or whitespace
//   if (name) {
//     if (name.trim() === "") {
//       return res.status(400).json({ error: "Book name can't be empty" });
//     } else {
//       book.name = name; // If valid, update the book name with body name
//     }
//   }

//   // Check if price is provided and is a valid number
//   if (price) {
//     if (isNaN(price)) {
//       return res.status(400).json({ error: "Book Price must be a number" });
//     } else {
//       book.price = parseFloat(price); // If valid, update the book price with body price
//     }
//   }

//   res.status(200).json(book);
// });


// FOR DELETE SINGLE BOOK DATA USING DELETE
router.delete("/:id", (req, res) => {
  let id = parseInt(req.params.id); // store id from url params
  let bookIndex = books.findIndex((book) => book.book_id === id); //find index of id which is pass through url params

  // check if book index is available or not and if not then display error of Book id not found
  if (bookIndex === -1) {
    return res.status(404).json({ error: "Book id not found" });
  }

  books.splice(bookIndex, 1); // delete book data if id is available
  res.status(200).json(books);
});

export default router;
