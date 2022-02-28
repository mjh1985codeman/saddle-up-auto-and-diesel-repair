const mongoose = require("mongoose");

mongoose.connect(process.env.ATLAS_URI || "mongodb://localhost/saddle-up-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
