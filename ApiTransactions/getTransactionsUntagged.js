'use strict';
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = (event, context, callback) => {
  console.log("Received event" + JSON.stringify(event));
  var iban  = event.pathParameters.iban;

  var params = {
    TableName: "transactions",
    FilterExpression: "attribute_not_exists(tag)",
    KeyConditionExpression: "#iban = :ibanVal and #sqnumber > :sqnVal",
    ExpressionAttributeNames:{
      "#iban":"UserIban",
      "#sqnumber":"SequenceNumber",
    },
    ExpressionAttributeValues: {
        ":sqnVal" : 100,
        ":ibanVal" : event.pathParameters.iban,
    }
};

  ddb.query(params, function(err, data) {
    if (err) {
      console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
      console.log("Query succeeded.");
      data.Items.forEach(function(item) {
          console.log(" -", item.SequenceNumber + ": " + item.title);
      });

      const response = {
        statusCode: 200,
        body: JSON.stringify(data.Items, null, 4),
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      };
      callback(null, response);
    }
  });

};
