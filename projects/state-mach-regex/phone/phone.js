const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

// This code reads a line at a time from stdin
rl.on('line', (line) => {
  const pattern = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/;
  if (line.match(pattern)) {
    const match = line.match(pattern)[0].replace(/\D/g, '');
    console.log(match);
  } else {
    console.log('No phone number found.');
  }
  rl.close();
});
