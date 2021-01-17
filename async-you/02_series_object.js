let async = require('async');
let http = require('http');

function getUrl(url, cb) {
  var body = '';
  http.get(url, function (res) {
    res.on('data', function (chunk) {
      body += chunk.toString();
    });
    res.on('end', function () {
      cb(null, body);
    });
  })
}

async.series({
  requestOne: function(done){
    getUrl(process.argv[2], done);
  },
  requestTwo: function(done){
    getUrl(process.argv[3], done);
  }
}, function(err, results){
  console.log(results);
});

// ## SERIES OBJECT (Exercise 2 of 7)

//  In this problem we will learn to use async.series.

//  The main difference between the waterfall and series functions is that the
//  result from a task function in async.series won't be passed along to the
//  next function once it completes. series will collect all results as an
//  array and pass it to the optional callback that runs once all of the task
//  functions have completed. For example:

//     async.series([
//       function(callback){
//         setTimeout(function() {
//           callback(null, 'one');
//         }, 200);
//       },
//       function(callback){
//         setTimeout(function() {
//           callback(null, 'two');
//         }, 100);
//       }
//     ],
//     // optional callback
//     function(err, results){
//       // results is now equal to ['one', 'two']
//     });

//  Instead of using an array as the result container async.series can use an
//  object, running each property and creating a result object with the same
//  properties. The above example can be written like so:

//     async.series({
//       one: function(done){
//         done(null, '1');
//       },
//       two: function(done){
//         done(null, '2');
//       }
//     }, function(err, results){
//       console.log(results);
//       // results will be {one: 1, two: 2}
//     });

// ## Challenge

//  Write a program that will receive two URLs as the first and second
//  command-line arguments.

//  Using http.get, create a GET request to these URLs and pass the response
//  body to the callback.

//  Pass in an object of task functions, using the property names requestOne
//  and requestTwo, to async.series.

//  console.log the results in the callback for series when all the task
//  functions have completed.

// ─────────────────────────────────────────────────────────────────────────────

//   » To print these instructions again, run: async-you print
//   » To execute your program in a test environment, run: async-you run
//     program.js
//   » To verify your program, run: async-you verify program.js
//   » For help run: async-you help