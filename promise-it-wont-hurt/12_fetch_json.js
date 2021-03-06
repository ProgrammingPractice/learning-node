'use strict';

var HTTP = require("q-io/http");

HTTP.read('http://localhost:1337').then((buf) => {
  // console.log(buf.toString());
  console.log(JSON.parse(buf));
});

//  Fetch JSON
//  Exercise 12 of 13


// # Let's do something, you know, from "real life"

// Let's fetch JSON over HTTP… YAY!

// Fetching JSON data from remote machines via AJAX is commonplace
// on both the server and client.  Promises also happen to map to AJAX
// particularly well.  Any AJAX request may either succeed or fail,
// never both.  Promises may fulfill or reject, never both.

// So wow.  Much similarity.  Very promising…

// Let's use a new module called q-io to take advantage of its http.read
// method which returns a promise for the value of a successful HTTP response
// body.

// Install by typing:

//     $ npm install q-io --save

// ## Task

// Fetch JSON from [http://](http://) and console.log it.

// There are several things you will want to know:

//   * `q-io`'s `http` module has a `read` method which returns a promise for thecontent of a successful (status 200) HTTP request.
//   * Parse the returned JSON and `console.log` it for much win.

// This challenge is a bit tricky but the implementation is relatively
// straightforward.  If you get stuck, refer to the q-io documentation for
// clarification:

//   [https://](https://)


//  » To print these instructions again, run: promise-it-wont-hurt print
//  » To execute your program in a test environment, run: promise-it-wont-hurt run program.js
//  » To verify your program, run: promise-it-wont-hurt verify program.js
//  » For help run: promise-it-wont-hurt help
