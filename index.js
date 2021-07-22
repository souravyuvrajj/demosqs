const { Consumer } = require('sqs-consumer');
https = require('https');
const AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});

const app = Consumer.create({
  queueUrl: 'https://sqs.ap-south-1.amazonaws.com/421067612086/sucess-queue',
  region: 'ap-south-1',
  handleMessage: async (message) => {
    console.log(message);
  },
  sqs: new AWS.SQS({
    httpOptions: {
      agent: new https.Agent({
        keepAlive: true
      })
    }
  })
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.on('timeout_error', (err) => {
    console.error(err.message);
});

app.on('message_received', (message) => {
console.info("message Received",message)
});

app.on('message_processed', (message) => {
console.info("message processed",message)
});

app.on('response_processed', () => {
console.info("response processed")
});

app.on('empty', () => {
console.info("Queue is empty")
});


app.start();
