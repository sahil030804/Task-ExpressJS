import express from "express";
import books from "./src/Routes/BookRoutes.js"; // import module from './src/Routes/BookRoutes.js'

const PORT = process.env.PORT || 8080; // access port from env file

const app = express();

//--------------- ACCESS JSON BODY DATA ----------------

// raw file enable
app.use(express.json());
// UrlEncoded turn false
app.use(express.urlencoded({ extended: false }));

// Uses route module for access all routes after this url ('/api/book')
app.use("/api", books);

app.listen(PORT, () => {
  console.log(`Server Is Running On PORT ${PORT}`);
});
