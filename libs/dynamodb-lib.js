import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-2' });

export function call(action, params) {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  return dynamoDB[action](params).promise();
  
}