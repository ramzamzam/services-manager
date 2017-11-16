const MASTER_URL = process.env.MASTER_URL;
const request = require('request-promise');

const options = {
    method: 'POST',
    uri: `http://${MASTER_URL}/register`,
    body: {
    	type: "APP",
    	id : '124'
    },
    json: true // Automatically stringifies the body to JSON
};
 
request(options)
    .then(function (parsedBody) {
        console.log({parsedBody})
    })
    .catch(function (err) {
        console.log({err})
    });