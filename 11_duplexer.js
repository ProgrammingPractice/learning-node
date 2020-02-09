var duplexer2 = require('duplexer2');
var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
  var childProc = spawn(cmd, args);

  return duplexer2(childProc.stdin, childProc.stdout);
};

// var childProc = spawn('echo', ['hello', 'world']);

// console.log(process.pid);
// console.log(childProc.pid);

// childProc.stdout.pipe(process.stdout);
