const express = require("express");
const router = express.Router();
const axios = require("axios");

// @route   GET api/prices
// @desc    Get realtime pricing for stocks
// @access  Public
router.get("/", async (req, res) => {
  let options = {
    method: "GET",
    url: "https://financialmodelingprep.com/api/v3/real-time-price",
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

// @route   GET api/prices/:ticker
// @desc    Get realtime pricing for a specific major index
// @access  Public
router.get("/:ticker", async (req, res) => {
  let options = {
    method: "GET",
    url: `https://financialmodelingprep.com/api/v3/real-time-price/${req.params.ticker}`,
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
