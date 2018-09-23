'use strict';
const AWS = require('aws-sdk');
const moment = require('moment')
const ddb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = (event, context, callback) => {
  console.log("Received event" + JSON.stringify(event));
  var startDate  = event.queryStringParameters.startDate;
  var endDate = event.queryStringParameters.endDate;
  
  var params = {
      TableName: "transactions",
      FilterExpression: "#date >= :startDateVal and #date <=:endDateVal ",
      KeyConditionExpression: "#iban = :ibanVal and #sqnumber > :sqnVal",
      ExpressionAttributeNames:{
        "#date":"Date", 
        "#iban":"UserIban",
        "#sqnumber":"SequenceNumber"
      },
      ExpressionAttributeValues: {
          ":sqnVal" : 100,
          ":startDateVal" :startDate,
          ":endDateVal" :endDate,
          ":ibanVal" : event.pathParameters.iban
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
