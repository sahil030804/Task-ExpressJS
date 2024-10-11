import * as yup from "yup";

// add book schema
export const bookSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required(`Book name must be required`)
    .min(1, "Name cannot be empty or contain only spaces"),
  price: yup
    .number()
    .typeError("Book price must be numbers")
    .required(`Book price must be required`)
    .positive(`Book price must be positive value`),
});

// update book schema
export const updateBookSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(1, "Name can't be empty or contain only spaces"),
  price: yup
    .number()
    .typeError("Book price must be numbers")
    .positive("Book Price must be a positive number"),
});
