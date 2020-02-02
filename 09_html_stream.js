var trumpet = require('trumpet');
var fs      = require('fs');
var through = require('through2');

var tr = trumpet();

process.stdin.pipe(tr).pipe(process.stdout);

function write(buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

tr.selectAll('.loud', function(span) {
  var sub_stream = span.createStream();
  // sub_stream.end('REPLACEMENT');

  var transformer = through(write);

  sub_stream.pipe(transformer).pipe(sub_stream);
})