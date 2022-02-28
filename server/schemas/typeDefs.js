const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Review {
    _id: ID!
    reviewText: String!
    reviewStars: Int!
    reviewDate: String
  }

  type Query {
    reviews: [Review]
    review(_id: ID!): Review
  }

  type Mutation {
    addReview(
      reviewText: String!
      reviewStars: Int!
      reviewDate: String
    ): Review
  }
`;

module.exports = typeDefs;
