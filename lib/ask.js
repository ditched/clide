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
      resolve(answer);
      rl.close();
    });
  });
};
