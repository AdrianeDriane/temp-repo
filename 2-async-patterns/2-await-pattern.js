const { readFile, writeFile } = require('fs').promises;

async function start() {
  try {
    const first = await readFile('./content/first.txt', 'utf-8');
    const second = await readFile('./content/second.txt', 'utf-8');
    await writeFile(
      './content/result-async.txt',
      `THIS IS COOL AF: ${first} || ${second}`
    );
    const third = await readFile('./content/result-async.txt', 'utf-8');
    console.log(first);
    console.log(second);
    console.log(third);
    console.log;
  } catch (error) {
    console.log(error);
  }
}

start();

// const { readFile, writeFile } = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// async function start() {
//   try {
//     const first = await readFilePromise('./content/first.txt', 'utf-8');
//     const second = await readFilePromise('./content/second.txt', 'utf-8');
//     await writeFilePromise(
//       './content/result-async.txt',
//       `THIS IS COOL AF: ${first}, ${second}`
//     );
//     const third = await readFilePromise('./content/result-async.txt', 'utf-8');
//     console.log(first);
//     console.log(second);
//     console.log(third);
//     console.log;
//   } catch (error) {
//     console.log(error);
//   }
// }

// start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// async function start() {
//   try {
//     const first = await getText('./content/first.txt');
//     const second = await getText('./content/second.txt');
//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
