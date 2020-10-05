
# API Project: Timestamp Microservice

## Table of contents
* [Status](#status)
* [User stories](#user-stories)
* [Example usage](#example-usage)
* [Example output](#example-output)
* [Technologies](#technologies)
* [Screenshots](#screenshots)
* [Contact](#contact)


## Status
Project is complete and an [interactive demo is available here](https://timestamp-microservice-challenge.ravenblack24.repl.co/).

**NOTE: repl.it projects quite often go to sleep**, if the link doesn't work - download the code and run locally.

## User stories:

1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
2. A date string is valid if can be successfully parsed by `new Date(date_string)` (JS) . Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**. In our test we will use date strings compliant with ISO-8601 (e.g. `"2016-11-20"`) because this will ensure an UTC timestamp.
3. If the date string is **empty** it should be equivalent to trigger `new Date()`, i.e. the service uses the current timestamp.
4. If the date string is **valid** the api returns a JSON having the structure 
`{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
5. If the date string is **invalid** the api returns a JSON having the structure `{"error" : "Invalid Date" }`.

## Example usage:
See: https://timestamp-microservice-challenge.ravenblack24.repl.co/

**Please note**: there may be a short delay while the repl.it app starts up.  If nothing happens or you get an error, wait a few seconds and try again.

## Example output:
* {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}

## Technologies
* express.js, node.js, html, css

## Screenshots
![index.html](https://raw.githubusercontent.com/ravenblack24/timestamp-microservice/master/public/tindex.PNG)
![api responses](https://raw.githubusercontent.com/ravenblack24/timestamp-microservice/master/public/tapi.png)

## Contact
Created by [Kay Pea](https://imkp.co.uk) - feel free to contact me!