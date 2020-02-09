var duplexer2 = require('duplexer2');
var spawn = require('child_process').spawn;

function duplexer_function(cmd, args) {
  var childProc = spawn(cmd, args);

  return duplexer2(childProc.stdin, childProc.stdout);
};

// duplexer_function('echo', ['hello', 'world']).pipe(process.stdout);

module.exports = duplexer_function;
