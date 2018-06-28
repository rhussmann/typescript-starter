import { Callback, Context, SNSEvent } from "aws-lambda";

module.exports.hello = (
  event: SNSEvent,
  context: Context,
  callback: Callback<any>,
) => {
  const response = {
    body: JSON.stringify({
      input: event,
      message: "Go Serverless v1.0! Your function executed successfully!",
    }),
    statusCode: 200,
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
