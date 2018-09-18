let pwd = process.cwd();

function writepwd() {
  process.stdout.write(pwd);
  process.stdout.write('\nprompt > ');
}

module.exports = writepwd;
