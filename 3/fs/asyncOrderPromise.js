const fs = require('fs').promises;

fs.readFile('./readme2.txt')
  .then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('./readme2.txt');
  })
  .then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('./readme2.txt');
  })
  .then((data) => {
    console.log('3번', data.toString());
    return fs.readFile('./readme2.txt');
  })
  .then((data) => {
    console.log('4번', data.toString());
    return fs.readFile('./readme2.txt');
  })
  .catch((err) => {
    console.error(err);
  });

async function main() {
  try {
    let data = await fs.readFile('./readme2.txt');
    console.log('100번', data.toString());
    data = await fs.readFile('./readme2.txt');
    console.log('101번', data.toString());
    data = await fs.readFile('./readme2.txt');
    console.log('102번', data.toString());
    data = await fs.readFile('./readme2.txt');
    console.log('103번', data.toString());
  } catch (err) {
    console.error(err);
  }
}

main();
