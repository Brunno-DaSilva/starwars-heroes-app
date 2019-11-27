const mongoose = require("../db/connection");

const StarWarsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  weapon: { type: String, required: true },
  images: { type: String, required: true },
  attack: { type: String, required: true },
  attackDescription: { type: String, required: true },
  homeworld: { type: String, required: true }
});

const StarWars = mongoose.model("StarWars", StarWarsSchema);

module.exports = StarWars;
