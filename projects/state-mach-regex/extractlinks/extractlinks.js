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

let lineNumber = 0;
rl.on('line', (line) => {
  if (line.match(url)) {
    lineNumber++;
    console.log(`${lineNumber}: ${line.match(url)[0]}`);
  }
});

rl.on('close', function() {
  console.log(`Done there are ${lineNumber} links on the page.`);
});
// !!!! IMPLEMENT ME

// Read file

// Set up regex

// Find matches

// Print all matches
