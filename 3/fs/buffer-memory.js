const fs = require('fs');

console.log('before:', process.memoryUsage().rss);

const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1);

console.log('buffer:', process.memoryUsage().rss);

// 대략 메모리 1GB 사용 (스트림 방식보다 훨씬 더 사용한다)
