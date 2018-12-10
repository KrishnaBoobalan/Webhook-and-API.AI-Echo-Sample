"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/Math", function(req, res) {
  var Math1 = req.body.queryResult.parameters.Mathvalue1;
  var Math2 = req.body.queryResult.parameters.Mathvalue2;
  var opr = req.body.queryResult.parameters.MathOperand;
  var speech = "Successful";
  return req.json({
    result : { fulfillmentText: speech, source: "webhook-echo-sample"}
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
