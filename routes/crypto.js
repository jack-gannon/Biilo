const express = require("express");
const router = express.Router();
const axios = require("axios");

// @route   GET api/crypto
// @desc    Get all realtime cryptocurrency prices
// @access  Public
router.get("/", async (req, res) => {
  let options = {
    method: "GET",
    url: "https://financialmodelingprep.com/api/v3/cryptocurrencies",
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

// @route   GET api/crypto/:ticker
// @desc    Get realtime price for specific cryptocurrency
// @access  Public
router.get("/:ticker", async (req, res) => {
  let options = {
    method: "GET",
    url: `https://financialmodelingprep.com/api/v3/cryptocurrencies/${req.params.ticker}`,
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
