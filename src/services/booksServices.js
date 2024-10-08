let books = [
  { id: "1", name: "book 1", price: "999" },
  { id: "2", name: "book 2", price: "899" },
  { id: "3", name: "book 3", price: "1099" },
];

const getAllBooks = () => books;

const getSingleBook = (id) => {
  let book = books.find((book) => book.id === id);
  return book;
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

  // Check if name is provided and not an empty string or whitespace
  if (name) {
    books[bookIndex].name = name;
  }
  // Check if price is provided and is a valid number
  if (price) {
    books[bookIndex].price = price;
  }

  return books[bookIndex];
};

const deleteSingleBook = (id) => {
  const bookIndex = books.findIndex((book) => book.id === id);

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
