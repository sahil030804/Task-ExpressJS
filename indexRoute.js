import express from "express";
import bookRoute from "./book/BookRoutes.js";

const router = express.Router();

//--------------- ACCESS JSON BODY DATA ----------------

// raw file enable
router.use(express.json());
// UrlEncoded turn false
router.use(express.urlencoded({ extended: false }));

router.get("/api/book", (req, res) => {
  res.status(200).send(`Welcome to Book API`);
});

// Uses bookRoutes for access different endpoints
router.use("/api/book", bookRoute);

export default router;
