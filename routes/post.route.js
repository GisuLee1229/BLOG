const express = require("express");

const router = express.Router();

router.get("/home", (req, res) => {
    res.send("Welcome Home");
});

router.get("/about", (req, res) => {
    res.send("About as");
});

router.get("/contact", (req, res) => {
    res.send("My Contact");
});

router.get("/info", (req, res) => {
    res.send("My Info");
});

router.get("/dashboard", (req, res) => {
    res.send("My Dashboard");
});

module.exports = router;
