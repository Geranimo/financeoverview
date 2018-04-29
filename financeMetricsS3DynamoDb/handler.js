'use strict';

const csv = require('fast-csv');
const AWS = require('aws-sdk');
const s3Bucket = new AWS.S3();
const ddb = new AWS.DynamoDB();

module.exports.loadToDynamoDb = (event, context, callback) => {
  console.log("Received event =>" + JSON.stringify(event));
  
  const fileName = event.Records[0].s3.object.key;
  const bucketName = event.Records[0].s3.bucket.name;
  console.log("FileName " + fileName + "<==>" + "BucketName" + bucketName);

  const stream = s3Bucket.getObject({ Bucket: bucketName, Key: fileName }).createReadStream();
  var parser = csv.fromStream(stream, { headers: true }).on("data", function (data) {
    parser.pause();  //can pause reading using this at a particular row
    storeInDb(data);
    parser.resume(); // to continue reading
    console.log(data);
  }).on("end", function () {
    console.log('process finished');
  });
  callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

function storeInDb(data) {

  var params = {
    TableName: 'transactions',
    Item: {
      'UserIban' : {S: data.IBAN},
      'SequenceNumber' : {N: data.SequenceNumber},
      'Date' : {S: data.Date},
      'Payment': {S: data.Payment},
      'BalanceAfter': {S: data.BalanceAfter},
      'NameCounterParty': {S: data.NameCounterParty},
      'Description': {S: data.Description}
    }
  };

  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    }
  });

}