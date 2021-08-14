const { Router } = require("express")
const { reviewController } = require("../controllers/review.controller")

const router = Router();

router.post("/review" , reviewController.addReview)
router.patch("/review/:id" , reviewController.editReview)
router.delete("/review/:id" ,  reviewController.deleteReview)

module.exports = router