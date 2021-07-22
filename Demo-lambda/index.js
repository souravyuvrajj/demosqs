var AWS = require('aws-sdk');
AWS.config.region = 'ap-south-1';
var lambda = new AWS.Lambda();

  var params = {
    FunctionName: 'Demo-lambda', // the lambda function we are going to invoke
    ClientContext: 'STRING_VALUE',
    InvocationType: 'Event',
    LogType: 'Tail',
    Payload: '{"name" : "Alex"}'
  };

  lambda.invoke(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  })