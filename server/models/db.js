const mongoose = require("mongoose");

const DB = process.env.MONGODB_URI;
const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "Connection error: "));
connection.once("open", () => {
  console.log("Connected to DB");
});

mongoose.connect(DB, {
  useNewURLParser: true,
  useUnifiedTopology: true,
});
