const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  "Restaurant ID": { type: Number, required: true },
  "Restaurant Name": { type: String, required: true },
  "Country Code": { type: Number, required: true },
  City: { type: String },
  Address: { type: String },
  Cuisines: { type: [String] },
  "Price range": { type: Number },
  "Aggregate rating": { type: Number },
  "Rating text": { type: String },
  Votes: { type: Number },
  Country: { type: String },
  Cuisine_count: { type: Number },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
