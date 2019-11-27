const express = require("express");
const method = require("method-override");
const mongoose = require("./db/connection.js");
const port = 3000;

const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(method("_method"));
app.use(express.static("public"));

const StarWars = require("./models/StarWars.js");

const starWarsController = require("./controllers/starWars.js");

app.get("/", (req, res) => {
  StarWars.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .then(starWars => {
      res.render("Index", { starWars });
    });
});

app.use("/starWars", starWarsController);

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.listen(port, () => console.log("server is running"));
