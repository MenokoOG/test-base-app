const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const itemsRouter = require("./routes/items");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

app.use(cors());
app.use("/api", itemsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
