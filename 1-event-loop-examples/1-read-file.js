const { readFile } = require('fs');

console.log('Starting First Task');
readFile('./content/first.txt', 'utf8', (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(res);
  console.log('First Task Finished');
});
console.log('Second Task starting');
