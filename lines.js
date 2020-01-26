var split = require('split');
var through2 = require('through2');
var isOdd = true;

process.stdin
    .pipe(split())
    .pipe(through2(function (line, _, next) {
        var output;
        if (isOdd) {
          output = line.toString().toLowerCase();
        } else {
          output = line.toString().toUpperCase();
        }
        isOdd = !isOdd;

        this.push(output + '\n');
        next();
    }))
    .pipe(process.stdout)
;
