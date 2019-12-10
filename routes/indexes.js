const express = require("express");
const router = express.Router();
const axios = require("axios");

// @route   GET api/indexes
// @desc    Get realtime pricing for major indexes
// @access  Public
router.get("/", async (req, res) => {
  let options = {
    method: "GET",
    url: "https://financialmodelingprep.com/api/v3/majors-indexes",
    port: 443
  };
  axios(options)
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

// @route   GET api/indexes/:ticker
// @desc    Get realtime pricing for a specific major index
// @access  Public
router.get("/:ticker", async (req, res) => {
  let options = {
    method: "GET",
    url: `https://financialmodelingprep.com/api/v3/majors-indexes/${req.params.ticker}`,
    port: 443
  };
  axios(options)
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
