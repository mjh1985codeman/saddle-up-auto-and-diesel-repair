const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reviewSchema = new Schema(
  {
    reviewText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000,
    },
    reviewStars: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    reviewDate: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Review = model("Review", reviewSchema);

module.exports = Review;
