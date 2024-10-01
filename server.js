import express from "express";
import books from "./src/Routes/BookRoutes.js"; // import module from './src/Routes/BookRoutes.js'

const PORT = process.env.PORT; // access port from env file

const app = express();

app.get("/api/books", books);

app.listen(PORT, () => {
  console.log(`Server Is Running On PORT ${PORT}`);
});
