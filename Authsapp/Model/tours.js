const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  image: {
    type: String,
    require: true,
    trim: true,
  },
  price: {
    type: Number,
    require: true,
  },
 
});

module.exports = mongoose.model("tour", tourSchema);
