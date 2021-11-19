

const request = require('request');


const fetchMyIP = function(callback) {

  request(`https://api.ipify.org?format=json`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    let parsed = JSON.parse(body);

    callback(null, parsed.ip);

  });
};


module.exports = { fetchMyIP };