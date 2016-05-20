var Promise = require('bluebird');
var readline = require('readline');

module.exports = function ask(question, defaultValue) {
  defaultValue = (typeof defaultValue === 'undefined' ? '' : defaultValue);
  question += '? ';

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(function(resolve) {
    rl.question(question, function(answer) {
      if (/y(es)?/i.test(answer)) {
        resolve(true);
      } else if (/n(o)?/i.test(answer)) {
        resolve(false);
      } else {
        rl.close();
        ask(question, answer);
      }
    });
  });
};
