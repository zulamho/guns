const mongoose = require("mongoose");

const weaponSchema = mongoose.Schema({
  name: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

  reviews: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
  },
});

const Weapon = mongoose.model("Weapon", weaponSchema);

module.exports = Weapon;
