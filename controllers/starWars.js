const express = require("express");
const router = express.Router();

const StarWars = require("../models/StarWars.js");

router.get("/", (req, res) => {
  StarWars.find({}).then(starWars => {
    res.render("starWars/Index", { starWars });
  });
});

router.get("/new", (req, res) => {
  if (req.body.images === "Rebel Soldier") {
    req.body.images =
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1574745089/imgs_starwars/imgs/rey_wcfv6m.png";
  } else {
    req.body.images =
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1574745090/imgs_starwars/imgs/solo_rq86zf.png";
  }
  res.render("starWars/New");
});

router.get("/about", (req, res) => {
  res.render("starWars/About");
});

router.get("/:id", (req, res) => {
  StarWars.findOne({ _id: req.params.id }).then(starWars => {
    res.render("starWars/Show", starWars);
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  StarWars.create(req.body).then(() => {
    res.redirect("/");
  });
});

router.get("/edit/:id", (req, res) => {
  StarWars.findOne({ _id: req.params.id }).then(starWars => {
    res.render("starWars/Edit", starWars);
  });
});

router.put("/:id", (req, res) => {
  StarWars.findOneAndUpdate({ _id: req.params.id }, req.body).then(starWars => {
    res.redirect(`/starWars/${starWars.id}`);
  });
});

router.delete("/:id", (req, res) => {
  StarWars.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/starWars");
  });
});

module.exports = router;
