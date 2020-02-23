var crypto = require('crypto');

// console.warn("The passphrase is: '" + process.argv[2] + "'");

var decryptor = crypto.createDecipher('aes256', process.argv[2]);

process.stdin.pipe(decryptor).pipe(process.stdout);
