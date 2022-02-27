//This is where our Server API Endpoints are setup.
const express = require("express");

// reviewRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /note.
const reviewRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../config/connection");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the reviews.
reviewRoutes.route("/review").get(function (req, res) {
  let db_connect = dbo.getDb("reviews");
  db_connect
    .collection("reviews")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single review by id
reviewRoutes.route("/review/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("reviews").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new review.
reviewRoutes.route("/review/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    review_title: req.body.review_title,
    review_body: req.body.review_body,
    //review_stars will be an Integer representative of the number of stars the user wants to leave
    review_stars: req.body.review_stars,
    reviewer_name: req.body.reviewer_name,
  };
  db_connect.collection("reviews").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

//export the routes.
module.exports = reviewRoutes;
