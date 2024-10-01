import express from "express";
import books from "./src/Routes/BookRoutes.js"; // import module from './src/Routes/BookRoutes.js'

const PORT = process.env.PORT; // access port from env file

const app = express();

app.get("/api/books", books);

// Uses route module for access all routes after this url ('/api/book')
app.use("/api/book", books);

app.listen(PORT, () => {
  console.log(`Server Is Running On PORT ${PORT}`);
});
