'use strict';
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

module.exports.getTransactions = (event, context, callback) => {

  var params = {
      TableName: "transactions",
      FilterExpression: "#date >= :dateVal",
      KeyConditionExpression: "#iban = :ibanVal and #sqnumber > :sqnVal",
      ExpressionAttributeNames:{
        "#date":"Date", 
        "#iban":"UserIban",
        "#sqnumber":"SequenceNumber"
      },
      ExpressionAttributeValues: {
          ":sqnVal" : 100,
          ":dateVal" :"2018-02-01",
          ":ibanVal" :"NL32RABO0147457521"

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
      };
      callback(null, response);
    }
  });

};
