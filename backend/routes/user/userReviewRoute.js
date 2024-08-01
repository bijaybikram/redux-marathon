const {
  getMyReviews,
  createReview,
  deleteReview,
} = require("../../controller/user/review/reviewController");

const isAuthenticated = require("../../middleware/isAuthenticated");
const restrictTo = require("../../middleware/restrictTo");
const catchAsync = require("../../services/catchAsync");

const router = require("express").Router();

router.route("/").get(isAuthenticated, catchAsync(getMyReviews));

router
  .route("/:id")
  .post(isAuthenticated, restrictTo("customer"), catchAsync(createReview))
  .delete(isAuthenticated, restrictTo("customer"), catchAsync(deleteReview));

module.exports = router;
