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

var Operate = {
  'Add': function(a,b){ return a + b },
  'Sub': function(a,b){ return a - b },
  'Mul': function(a,b){ return a * b },
  'Div': function(a,b){ return a / b },
};

function gh(Op,a,b){
  var Opr = Operate(op);
  var Result = Calc(Math1,Math2);
  Return
}

restService.post("/Math", function(req, res) {
  var Math1 = req.body.queryResult.parameters.Mathvalue1;
  var Math2 = req.body.queryResult.parameters.Mathvalue2;
  var operator = req.body.queryResult.parameters.MathOperand;
  Calc = Operate[operator];
  var Result = Calc(Math1,Math2);
  var spech = "Result is " + Result;
  return res.json({
  "fulfillmentText": spech,
  "payload": {
    "google": {
      "expectUserResponse": true,
      "richResponse": {
        "items": [
          {
            "simpleResponse": {
              "textToSpeech": spech
            }
          }
        ]
      }
    }
  }
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
