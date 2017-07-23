'use strict';

// Firebase library
const functions = require('firebase-functions');
// Moments library to format dates.
const moment = require('moment');
// CORS Express middleware to enable CORS Requests.
const cors = require('cors')({origin: true});
// Request library to make HTTP requests
const request = require('request');

const format = 'MMMM Do, YYYY, h:mm A';

/**
* Returns the time in the city provided.
*
* This endpoint supports CORS.
*/
exports.timein = functions.https.onRequest((req, res) => {
  console.log('Request Body', req.body);
  const trigger_word = req.body.trigger_word;
  console.log('trigger_word', trigger_word);
  const message = req.body.text;
  console.log('message', message);
  const loc     = message.substr(trigger_word.length + 1);
  console.log('loc', loc);

  // Enable CORS using the `cors` express middleware.
  cors(req, res, () => {
    if (loc) {
      // res.status(200).send({'text': `Someday I'll be able to tell you what time it is in ${loc}... just not right now!`});
      request('https://timezoneapi.io/api/address/?' + encodeURIComponent(loc), function(err, response, data) {
        console.log(data);
        console.log(response);
        console.log(err);
        res.status(200).send({'text': `I retrieved something from timezoneapi.io, go see what it is...`});
        // // Fetch it here!
        // var data = JSON.parse(data);
        // if (data.meta.code == '200') {
        //   // Example: Get the city parameter
        //   var city = data.data.addresses[0].city;
        //
        //   // Example: Get the users time
        //   var time = data.data.addresses[0].datetime.date_time_txt;
        //   res.status(200).send({'text': `Hm, maybe it's ${time} in ${loc}...?`});
        // }
      });
    } else {
      const formattedDate = moment().format(format);
      res.status(200).send({'text': `You didn't provide a location, but it's ${formattedDate} where I am!`});
    }
  });
});
