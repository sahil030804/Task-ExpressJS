import { books } from "../book/booksServices.js";

const validate = (schema) => {
  return async (req, res, next) => {
    try {
      // await schema.validate(req.body);
      await schema.validate(req.body, { abortEarly: false }); // { abortEarly: false } this disable abort after first validation in unsuccessfull and run second validation and give both error at same time if occur
      next();
    } catch (err) {
      res.status(400).json({ error: err.errors });
    }
  };
};

export const idNotFound = (req, res, next) => {
  const id = req.params.id;
  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    return res.status(400).json({ error: `Book not found with id ${id}` });
  }
  next();
};

export default validate;
