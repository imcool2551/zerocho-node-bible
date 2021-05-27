const fs = require('fs').promises;

setInterval(() => {
  fs.unlink('./abcdefg.js');
}, 1000);

// 프로미스에 catch를 붙이지 않으면 unhandled promise 경고가 뜬다.
// 프로세스가 죽지는 않지만 catch를 붙이는 습관을 들이자
