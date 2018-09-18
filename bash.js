let pwd = require('./pwd');
let ls = require('./ls');
let cat = require('./cat');
process.stdout.write('prompt > ');

process.stdin.on('data', (data, args) => {
  const cmd = data.toString().trim();
  console.log(cmd);
  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd === 'cat') {
    cat(args);
  }
});
