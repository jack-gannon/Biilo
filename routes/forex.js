const express = require("express");
const router = express.Router();
const axios = require("axios");

// @route   GET api/forex
// @desc    Get all realtime major foreign currency exchange rates
// @access  Public
router.get("/", async (req, res) => {
  let options = {
    method: "GET",
    url: "https://financialmodelingprep.com/api/v3/forex",
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

// @route   GET api/forex/:pair
// @desc    Get realtime exchange rate data for a specific currency pair
// @access  Public
router.get("/:pair", async (req, res) => {
  let options = {
    method: "GET",
    url: `https://financialmodelingprep.com/api/v3/forex/${req.params.pair}`,
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
