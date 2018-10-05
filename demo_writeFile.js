var fs = require('fs');

fs.appendFile('mynewfile3.txt','Helloooooo content!\n', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.appendFile('mynewfile3.txt', 'This is my text\n', function (err) {
  if (err) throw err;
  console.log('I appended to this file!\n');
});
