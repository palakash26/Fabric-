// const Order = require("../../models/Order");
// const Product = require("../../models/Product");
// const ProductReview = require("../../models/Review");

// const addProductReview = async (req, res) => {
//   try {
//     const { productId, userId, userName, reviewMessage, reviewValue } =
//       req.body;

//     const order = await Order.findOne({
//       userId,
//       "cartItems.productId": productId,
//       // orderStatus: "confirmed" || "delivered",
//     });

//     if (!order) {
//       return res.status(403).json({
//         success: false,
//         message: "You need to purchase product to review it.",
//       });
//     }

//     const checkExistinfReview = await ProductReview.findOne({
//       productId,
//       userId,
//     });

//     if (checkExistinfReview) {
//       return res.status(400).json({
//         success: false,
//         message: "You already reviewed this product!",
//       });
//     }

//     const newReview = new ProductReview({
//       productId,
//       userId,
//       userName,
//       reviewMessage,
//       reviewValue,
//     });

//     await newReview.save();

//     const reviews = await ProductReview.find({ productId });
//     const totalReviewsLength = reviews.length;
//     const averageReview =
//       reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewValue, 0) /
//       totalReviewsLength;

//     await Product.findByIdAndUpdate(productId, { averageReview });

//     res.status(201).json({
//       success: true,
//       data: newReview,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Error",
//     });
//   }
// };

// const getProductReviews = async (req, res) => {
//   try {
//     const { productId } = req.params;

//     const reviews = await ProductReview.find({ productId });
//     res.status(200).json({
//       success: true,
//       data: reviews,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Error",
//     });
//   }
// };
// const getAverageReviews = async (req, res) => {
//   try {
//     const reviews = await ProductReview.aggregate([
//       {
//         $group: {
//           _id: "$productId",
//           averageRating: { $avg: "$reviewValue" },
//           totalReviews: { $sum: 1 },
//         },
//       },
//     ]);

//     res.status(200).json({
//       success: true,
//       data: reviews,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Error",
//     });
//   }
// };

// module.exports = { addProductReview, getProductReviews, getAverageReviews };




const Order = require("../../models/Order");
const Product = require("../../models/Product");
const ProductReview = require("../../models/Review");

console.log("Product model loaded:", Product);

const addProductReview = async (req, res) => {
  try {
    const { productId, userId, userName, reviewMessage, reviewValue } = req.body;

    // Log the input data for debugging
    console.log("Received review data:", { productId, userId, userName, reviewMessage, reviewValue });

    // Fetch order to validate purchase
    const order = await Order.findOne({
      userId,
      "cartItems.productId": productId,
    });

    if (!order) {
      console.log("Order not found for user:", userId, "and product:", productId);
      return res.status(403).json({
        success: false,
        message: "You need to purchase the product to review it.",
      });
    }

    // Check if a review already exists
    const existingReview = await ProductReview.findOne({
      productId,
      userId,
    });

    if (existingReview) {
      console.log("Review already exists for user:", userId, "and product:", productId);
      return res.status(400).json({
        success: false,
        message: "You already reviewed this product!",
      });
    }

    // Create a new review
    const newReview = new ProductReview({
      productId,
      userId,
      userName,
      reviewMessage,
      reviewValue,
    });

    await newReview.save();
    console.log("New review saved:", newReview);

    // Fetch all reviews for the product
    const reviews = await ProductReview.find({ productId });
    console.log("Fetched reviews for product:", productId, reviews);

    const totalReviewsLength = reviews.length;
    const averageReview =
      reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewValue, 0) / totalReviewsLength;

    console.log("Calculated average review:", averageReview);

    // Update product's average review
    const updatedProduct = await Product.findByIdAndUpdate(productId, { averageReview });
    console.log("Updated product with average review:", updatedProduct);

    res.status(201).json({
      success: true,
      data: newReview,
    });
  } catch (e) {
    console.error("Error adding product review:", e);
    res.status(500).json({
      success: false,
      message: "An error occurred while adding the review.",
    });
  }
};

const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;

    console.log("Fetching reviews for product:", productId);

    const reviews = await ProductReview.find({ productId });
    console.log("Fetched reviews:", reviews);

    res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (e) {
    console.error("Error fetching product reviews:", e);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the reviews.",
    });
  }
};

const getAverageReviews = async (req, res) => {
  try {
    console.log("Calculating average reviews for all products");

    const reviews = await ProductReview.aggregate([
      {
        $group: {
          _id: "$productId",
          averageRating: { $avg: "$reviewValue" },
          totalReviews: { $sum: 1 },
        },
      },
    ]);

    console.log("Calculated average reviews:", reviews);

    res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (e) {
    console.error("Error calculating average reviews:", e);
    res.status(500).json({
      success: false,
      message: "An error occurred while calculating average reviews.",
    });
  }
};

module.exports = { addProductReview, getProductReviews, getAverageReviews };
