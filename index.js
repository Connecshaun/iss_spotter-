
// const { fetchMyIP } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("it didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);

// });

// fetchCoordsByIP(Myip,(error, description) => {
//   if(error) {
//     console.log("Error:", error);
//   } else {
//     console.log(description);
//   }
// });

const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('154.20.190.226', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});