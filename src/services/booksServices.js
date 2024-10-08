

let books = [
  { id: "1", name: "book 1", price: "999" },
  { id: "2", name: "book 2", price: "899" },
  { id: "3", name: "book 3", price: "1099" },
];

const getAllBooks = () => books;

const getSingleBook = (id) => {
  return books.find((book) => book.id === id);
};

const addSingleBook = (name, price) => {
  let newBook = {
    id: String(books.length + 1),
    name: name,
    price: price,
  };

  books.push(newBook); //push new book data to books object
  return newBook;
};

const updateSingleBook = (id, name, price) => {
  const bookIndex = books.findIndex((book) => book.id === id);
  books[bookIndex].name = name; // update book name
  books[bookIndex].price = price; // update book price
  return books[bookIndex];
};

const deleteSingleBook = (id) => {
  books.splice(bookIndex, 1);
  return books;
};

export default {
  getAllBooks,
  getSingleBook,
  addSingleBook,
  updateSingleBook,
  deleteSingleBook,
};
