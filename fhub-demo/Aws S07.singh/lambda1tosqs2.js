console.log('Loading function');
var AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});

var QUEUE_URL = 'https://sqs.ap-south-1.amazonaws.com/421067612086/sucess-queue';
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

exports.handler = function (event, context) {
    var Records = event.Records;

    console.log("Calander Id", Records[0].messageAttributes.CalanderId.stringValue)
 
    var sqsParams = {
        MessageAttributes: {
            "Received CalanderId": {
              DataType: "String",
              StringValue: AWS.String(Records[0].messageAttributes.CalanderId.stringValue)
            },
          },
        MessageBody: 'Message coming from Demo-lambda',
        QueueUrl: QUEUE_URL
      };

      // Send the order data to the SQS queue
    let sendSqsMessage = sqs.sendMessage(sqsParams).promise();

    sendSqsMessage.then((data) => {
        console.log(`SUCCESS: ${data.MessageId}`);
        context.done(null,'');  // SUCCESS
    }).catch((err) => {
        console.log(`ERROR: ${err}`);
        context.done('error', "ERROR Put SQS");  // ERROR with message
    });

  };