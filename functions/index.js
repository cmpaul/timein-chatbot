'use strict';

// Firebase library
const functions = require('firebase-functions');
// Moments library to format dates.
const moment = require('moment');
// CORS Express middleware to enable CORS Requests.
const cors = require('cors')({origin: true});

/**
 * Returns the time in the city provided.
 *
 * This endpoint supports CORS.
 */
exports.timein = functions.https.onRequest((req, res) => {
  if (req.method !== 'GET') {
    res.status(403).send('Forbidden!');
  }

  console.log('Request params', req.query);

  // Enable CORS using the `cors` express middleware.
  cors(req, res, () => {
    // Reading date format from URL query parameter.
    let format = req.query.format;
    // Reading date format from request body query parameter
    if (!format) {
      format = req.body.format;
    }
    const formattedDate = moment().format(format);
    res.status(200).send({'text': formattedDate});
  });
});
