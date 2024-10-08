import booksServices from "../services/booksServices.js";
import * as yup from "yup";

export const bookSchema = yup.object().shape({
  name: yup
    .string()
    .required(`Book name must be required`)
    .min(2, `Book name must be atleast 2 character long`),

  price: yup
    .number()
    .required(`Book price must be required`)
    .positive(`Book price must be positive value`),
});

// // Schema for validating book data during update (name and price are optional)
// export const updateBookSchema = yup.object().shape({
//   name: yup
//     .string()
//     .min(2, "Book Name must be at least 2 characters long")
//     .trim(),
//   price: yup.number().positive("Book Price must be a positive number"),
// });

export const idNotFound = (req, res, next) => {
  const id = req.params.id;
  const book = booksServices.getSingleBook(id);

  if (!book) {
    return res.status(400).json({ error: `Book not found with id ${id}` });
  }
  //   console.log(book);
  next();
};

export const bookIndex = (req, res, next) => {
  const id = req.params.id;

  const bookIndex = booksServices
    .getAllBooks()
    .findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    return res.status(400).json({ error: `Book not found with id ${id}` });
  }

  next();
};
