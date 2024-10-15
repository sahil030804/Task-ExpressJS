import Joi from "joi";

// add book schema
export const bookSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "Book name cannot be empty",
    "any.required": "Book name is required",
  }),
  price: Joi.number().required().positive().messages({
    "any.required": "Book Price is required",
    "number.base": "Book price must be a number",
    "number.positive": "Book price must be positive number",
  }),
});

// update book schema
export const updateBookSchema = Joi.object({
  name: Joi.string().trim().messages({
    "string.empty": "Book name cannot be empty",
  }),
  price: Joi.number()
    .positive("Book Price must be a positive number")
    .messages({
      "number.base": "Book price must be a number",
      "number.positive": "Book price must be positive number",
    }),
});
