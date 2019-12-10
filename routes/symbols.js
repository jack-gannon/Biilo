const express = require("express");
const router = express.Router();
const axios = require("axios");
const paginateData = require("../utils/paginateData");

// @route   GET api/symbols
// @desc    Get current stock market price of any symbol in the list
// @access  Public
router.get("/", async (req, res) => {
  let options = {
    method: "GET",
    url: "https://financialmodelingprep.com/api/v3/company/stock/list",
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

// @route   GET api/symbols/:perPage.:pageNumber
// @desc    Get current stock market price of any symbol in the list
// @access  Public
router.get("/perPage=:perPage.pageNumber=:pageNumber", async (req, res) => {
  let options = {
    method: "GET",
    url: "https://financialmodelingprep.com/api/v3/company/stock/list",
    port: 443
  };
  axios(options)
    .then(response => {
      res.send(
        paginateData(
          response.data.symbolsList,
          req.params.perPage,
          req.params.pageNumber
        )
      );
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
