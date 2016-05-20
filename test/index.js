var clide = require('../lib');

// clide.ask('do you like cock')
//   .then(function(answer) {
//     console.log(answer);
//   });

clide.confirm('do you like dogs')
  .then(function(answer) {
    console.log(answer);
  });
