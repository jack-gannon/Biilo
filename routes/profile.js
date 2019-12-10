const express = require("express");
const router = express.Router();
const axios = require("axios");

// @route   GET api/profile/:ticker
// @desc    Get company profile based on ticker
// @access  Public
router.get("/:ticker", async (req, res) => {
  let options = {
    method: "GET",
    url: `https://financialmodelingprep.com/api/v3/company/profile/${req.params.ticker}`,
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
