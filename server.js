// server.js
// where node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Handle timestamp request with no date_time parameter specified
app.get("/api/timestamp/", (req, res) => {

  // Return current timestamp
  const date = new Date();
  res.json({"unix": date.getTime(), "utc": date.toUTCString()});

});

app.get("/api/timestamp/:date_string", (req, res) => {

  // Parse date_string parameter
  const dateString = req.params.date_string;

  // If first 5 characters are numbers, treat as unix timestamp
  if(/^\d{5,}/.test(dateString)) {
    // return unix timestamp as is, convert to int to use with toUTCString method
    res.json({"unix": dateString, "utc": new Date(parseInt(dateString)).toUTCString()});
  }

  // Convert input to Date 
  const date = new Date(dateString);
  // Convert Date to milliseconds
  const dateInMilliseconds = date.getTime();

  // If dateInMilliseconds is NaN, return Invalid Date response
  if (!dateInMilliseconds) {
    res.json({"error": "Invalid Date"});
  }

  // Return unix milliseconds and utc formatted date
  res.json({"unix": dateInMilliseconds, "utc": date.toUTCString()});

});

// listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});