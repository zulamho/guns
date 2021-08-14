const Review = require("../models/Review.model");

module.exports.reviewController = {
  addReview: async (req, res) => {
    try {
      await Review.create({
        author: req.body.author,
        text: req.body.text,
        weaponReview: req.body.weaponReview,
      });
      res.json("Отзыв добавлен");
    } catch (err) {
      res.json(err);
    }
  },

  editReview: async (req, res) => {
    try {
      await Review.findByIdAndUpdate(req.params.id, req.body);
      res.json("Отзыв изменен");
    } catch (err) {
      res.json(err);
    }
  },
  deleteReview: async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.json("Отзыв удален");
    } catch (err) {
      res.json(err);
    }
  },
};
