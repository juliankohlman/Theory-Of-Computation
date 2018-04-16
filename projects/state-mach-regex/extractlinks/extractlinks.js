const fs = require("fs");
const readline = require('readline');
const stream = require('stream');


const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];

const inStream = fs.createReadStream(filename);
const outStream = new stream;
const rl = readline.createInterface(inStream, outStream);
const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

rl.on('line', (line) => {
  // console.log(line.match(url)[0]);
  if (line.match(url)) {
    console.log(line.match(url)[0]);
  }
  // console.log(line);
});

rl.on('close', function() {
  console.log('done');
});
// !!!! IMPLEMENT ME

// Read file
// fs.readFile(filename, 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// Set up regex

// Find matches

// Print all matches
