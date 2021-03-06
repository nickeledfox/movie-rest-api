const express = require("express");
const cors = require("cors");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./server/routes/index");
app.use("/", routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
