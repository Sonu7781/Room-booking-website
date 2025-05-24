const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsyanc.js");
const ExpressError=require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing=require("../models/listing.js");
const { validateReview, isLoggedIn,isReviewAuthor }=require("../middleware.js");

const reviewController=require("../controllers/reviews.js");


// Review-> post Route

router.post("/",isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview)
);

// Review Delete Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,
    wrapAsync(reviewController.deleteReview)
);

module.exports=router;