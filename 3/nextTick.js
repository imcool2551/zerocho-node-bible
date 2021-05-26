setImmediate(() => {
  console.log('immediate');
});

process.nextTick(() => {
  console.log('nextTick');
});

setTimeout(() => {
  console.log('timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('promise');
});

/*
nextTick (마이크로 태스크)
promise (마이크로 태스크)
timeout 
immediate

마이크로 태스크가 일반 태스크보다 먼저 콜스택으로 올라간다
timeout, immediate는 랜덤하게 실행되므로 immediate만 쓰는 걸 권장한다
*/
