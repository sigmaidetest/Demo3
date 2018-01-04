let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB();
exports.handler = function (event, context, callback) {
    ddb.put({
        TableName: 'TableX',
        Item: { id: 1, name: 'XXX' }
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });

}