const fs = require('fs');

console.log('before:', process.memoryUsage().rss);

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');
readStream.pipe(writeStream);
readStream.on('end', () => {
  console.log('buffer:', process.memoryUsage().rss);
});

// 버퍼방식보다 메모리 훨씬 적게 사용 (100MB 미만)
