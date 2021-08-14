const { Router } = require("express");
const { categoryController } = require("../controllers/categories.controller");

const router = Router();

router.get("categories", categoryController.getCategories);
router.post("/categoryAdd", categoryController.addCategory);
router.patch("/category/:id", categoryController.editCategory);
router.delete("/category/:id", categoryController.deleteCategory);

module.exports = router;
