let fs = require('fs');

const callsCat = () => {
  fs.readFile('../config/dev/myfile.txt', 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    }
  });
};

module.exports = callsCat;
