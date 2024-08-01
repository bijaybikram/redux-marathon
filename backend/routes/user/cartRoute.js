const {
  addToCart,
  getMyCartItems,
  deleteMyCartItem,
} = require("../../controller/user/cart/cartController");
const isAuthenticated = require("../../middleware/isAuthenticated");
const restrictTo = require("../../middleware/restrictTo");
const catchAsync = require("../../services/catchAsync");

const router = require("express").Router();
router
  .route("/:productId")
  .post(isAuthenticated, restrictTo("customer"), catchAsync(addToCart))
  .delete(
    isAuthenticated,
    restrictTo("customer"),
    catchAsync(deleteMyCartItem)
  );

router.route("/").get(isAuthenticated, catchAsync(getMyCartItems));

module.exports = router;
