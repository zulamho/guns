const Category = require("../models/Category.model");
const Weapon = require("../models/Weapon.model");

module.exports.categoryController = {
  addCategory: async (req, res) => {
    try {
      await Category.create({
        name: req.body.name,
      });
      res.json("Категория добавлена!");
    } catch (err) {
      console.log(err);
    }
  },
  getCategories: async (req, res) => {
    try {
      const data = await Category.find();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
  },
  editCategory: async (req, res) => {
    try {
      const data = await Category.findByIdAndUpdate(req.params.id);
      res.json(data);
    } catch (err) {
      console.log(err);
    }
  },

  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json("Категория удалена!");
    } catch (err) {
      console.log(err);
    }
  },
};
