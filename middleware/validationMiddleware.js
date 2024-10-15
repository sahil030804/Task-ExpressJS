import { books } from "../book/booksServices.js";

const validate = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false }); // abortearly for stopping code to be exit when one error occur then show all errors in array in object
      next();
    } catch (error) {
      const errorMessage = error.details.map((detail)=>detail.message);
      res.status(400).json({ error: errorMessage });
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
