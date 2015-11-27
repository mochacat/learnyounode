var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]).toString();

var new_lines = buffer.split("\n").length - 1;

console.log(new_lines);
