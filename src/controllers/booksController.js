import booksServices from "../services/booksServices.js";

const getAllBooks = (req, res) => {
  const books = booksServices.getAllBooks();
  res.status(200).json(books);
};

const getSingleBook = (req, res) => {
  let book = booksServices.getSingleBook(req.params.id);
  res.status(200).json(book);
};

const addSingleBook = (req, res) => {
  const { name, price } = req.body;
  let newBook = booksServices.addSingleBook(name, price);
  res.status(200).json(newBook);
};

const updateSingleBook = async (req, res) => {
  const { name, price } = req.body;
  let book = booksServices.updateSingleBook(req.params.id, name, price);
  res.status(200).json(book);
};

const deleteSingleBook = (req, res) => {
  let books = booksServices.deleteSingleBook(req.params.id);
  res.status(200).json(books);
};

export default {
  getAllBooks,
  getSingleBook,
  addSingleBook,
  updateSingleBook,
  deleteSingleBook,
};
