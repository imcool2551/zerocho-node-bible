const fs = require('fs');

setInterval(() => {
  fs.unlink('./abcdefg.js', (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);

// 내장모듈이 발생시킨 에러는 try-catch로 감싸주지 않아도 프로세스가 죽지는 않는다
