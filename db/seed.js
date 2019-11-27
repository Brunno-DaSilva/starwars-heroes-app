const StarWars = require("../models/StarWars");
const data = require("./seeds.json");
const mongoose = require("./connection.js");

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

StarWars.deleteMany({})
  .then(() => {
    return StarWars.collection.insertMany(data);
  })
  .then(() => {
    process.exit();
  });
