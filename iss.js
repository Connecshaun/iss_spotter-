

const request = require('request');


// const fetchMyIP = function(callback) {

//   request(`https://api.ipify.org?format=json`, (error, response, body) => {

//     if (error) {
//       callback(error, null);
//       return;
//     }

//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }

//     let parsed = JSON.parse(body);

//     callback(null, parsed.ip);

//   });
// };


const fetchCoordsByIP = function(ip, callback) {

  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body);

    callback(null, { latitude, longitude });
    
  });
};




// module.exports = { fetchMyIP };

module.exports = { fetchCoordsByIP };