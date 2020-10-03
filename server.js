// Init project
const express = require('express');
const app = express();
const timestamp = require('./src/api/Timestamp/index');

// Serve static resources from public dir
app.use(express.static('public'));

// Route for index page
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/**
 * Route for current date timestamp request
 * 
 * @returns {String} JSON response
 */
app.get("/api/timestamp/", (req, res) => {
  res.json(timestamp.currentTimeStamp());
});

/** 
 * Route for timestamp request with parameter
 * 
 * @returns {String} json response
 */
app.get("/api/timestamp/:date_string", (req, res) => {
  res.json(timestamp.processTimeStampRequest(req.params.date_string));
});

// Listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});