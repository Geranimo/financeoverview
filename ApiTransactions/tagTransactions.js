'use strict';
const AWS = require('aws-sdk');
const moment = require('moment')
const ddb = new AWS.DynamoDB();

module.exports.handler = (event, context, callback) => {
  console.log("Received event" + JSON.stringify(event));
  var body = JSON.parse(event.body);
  console.log("Received body" + body);
  console.log("Received UserIban" + body.UserIban);
  
  var params = {
      TableName: "transactions",
      Key : {
        "UserIban" : {S: body.UserIban}, 
        "SequenceNumber" :{N: body.SequenceNumber}
      },
      UpdateExpression: "set #tag = :tagVal",
      ExpressionAttributeNames:{
        "#tag":"tag"
      },
      ExpressionAttributeValues:{
        ":tagVal": {S: body.tag}
      },
      ReturnValues:"UPDATED_NEW"
  }
  

  ddb.updateItem(params, function(err, data) {
    if (err) {
      console.error("Unable to add Item. Error:", JSON.stringify(err, null, 2));
    } else {
      console.log("Query succeeded.");
      const response = {
        statusCode: 200,
        body: JSON.stringify(data.Items, null, 4),
      };
      callback(null, response);
    }
  });
};
