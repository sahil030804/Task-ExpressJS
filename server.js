import express from "express";
import dotenv from "dotenv-safe";
import indexRoute from "./indexRoute.js";

dotenv.config();

const PORT = process.env.PORT || 8080; // access port from env file or static port if not available

const app = express();

// Use index routes
app.use("/", indexRoute);

app.listen(PORT, () => {
  console.log(`Server Is Running On PORT ${PORT}`);
});
