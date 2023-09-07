const express = require("express");

const router = express.Router();

const path = require("path");

const rootDir = require("../util/path");

router.get("/success", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "success.html"));
});

module.exports = router;
