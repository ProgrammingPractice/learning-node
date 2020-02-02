var http = require('http');
var fs = require('fs');
var through = require('through2');
var stream = through(write, end);

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(stream).pipe(res);
  }
	else res.end('send me a POST\n');
});
server.listen(process.argv[2]);