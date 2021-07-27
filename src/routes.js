const express = require("express");
const router = express.Router();
const { isUnix } = require("./utils");

router.get("/hello", (req, res) => {
  res.status(200).json({ greeting: "First API endpoint" });
});

router.get("/", (req, res) => {
  const dateString = new Date(Date.now());

  res.status(200).json({
    unix: dateString.getTime(),
    utc: dateString.toUTCString(),
  });
});

router.get("/:date", (req, res) => {
  const date = req.params.date;
  let dateString = new Date(date);

  if (isUnix(date)) {
    dateString = new Date(Number(date));
  }

  if (dateString.toString() === "Invalid Date") {
    res.status(404).json({
      error: "Invalid Date",
    });
  } else {
    res.status(200).json({
      unix: dateString.getTime(),
      utc: dateString.toUTCString(),
    });
  }
});

module.exports = router;
