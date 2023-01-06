const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
const app = express();

app.listen(8000, () => {
  console.log("server start on PORT 4000");
});

mongoose
  .connect("mongodb://localhost:27017/jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection Succcessfull");
  }).catch(err => console.log(err.message));

app.use(
  cors({
    origin: ["http://localhost:8000"],
    method: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
