var express = require("express");
var router = express();
var burger = require("../models/burger.js");


//GET(Read) selectAll function from burger object in burger.js file
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { burgers: data });
    });
});

//POST(Create) insertOne function from burger object in burger.js file
router.post("/", function (req, res) {
    burger.insertOne([req.body.name], function () {
        res.redirect("/");
    })
});

//PUT(Update) updateOne function from burger object in burger.js file
router.put("/", function (req, res) {
    burger.updateOne([req.body.id], function () {
        res.redirect("/");
    })
});

//Export
module.exports = router;