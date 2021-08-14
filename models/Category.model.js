const mongoose = require("mongoose");

const categorySchema = {
  name: String,
};

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
