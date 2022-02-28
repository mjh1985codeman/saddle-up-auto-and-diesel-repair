const { Review } = require("../models");

const resolvers = {
  Query: {
    review: async (parent, { _id }) => {
      return Review.findOne({ _id });
    },

    reviews: async () => {
      return Review.find();
    },
  },

  Mutation: {
    addReview: async (parent, args) => {
      const review = await Review.create({
        ...args,
      });

      return review;
    },
  },
};

module.exports = resolvers;
