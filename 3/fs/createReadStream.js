const fs = require('fs');
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 }); // 기본은 64KB씩 chunk 되지만, 16바이트로 변경

const data = [];
readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data:', chunk, chunk.length);
});
readStream.on('end', () => {
  console.log('end:', Buffer.concat(data).toString());
});
readStream.on('error', (err) => {
  console.log('error:', err);
});
