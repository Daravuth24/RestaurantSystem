const dotenv = require('dotenv').config();
const express = require("express");
const cors = require("cors");
const {connectDB} = require('./dbConnect')
const colors = require('colors');
const restaurantsRoutes = require("./routes/restaurants");
const app = express();

connectDB();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use("/api", restaurantsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
