let pwd = require('./pwd');
let ls = require('./ls');
console.log('hi', ls);
process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  console.log(cmd);
  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  }
});
