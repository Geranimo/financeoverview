'use strict';
const AWS = require('aws-sdk');
const moment = require('moment')
const ddb = new AWS.DynamoDB.DocumentClient();

module.exports.getTransactions = (event, context, callback) => {
  console.log("Received event" + JSON.stringify(event));
  var month = event.queryStringParameters.month;
  var year = event.queryStringParameters.year;
  var startDate = moment().startOf('month').month(month).year(year).format('YYYY-MM-DD')
  var endDate = moment().endOf('month').month(month).year(year).format('YYYY-MM-DD')

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
      };
      callback(null, response);
    }
  });

};
