const timeout = setTimeout(() => {
  console.log('1.5초후 실행');
}, 1500);

const interval = setInterval(() => {
  console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
  console.log('실행되지 않습니다');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
  console.log('실행되지 않습니다');
});

clearImmediate(immediate2);

/*
즉시 실행(0ms)
1초마다 실행 (1000ms)
1.5초후 실행 (1500ms)
1초마다 실행 (2000ms)
*/

/* 노트
setTimeout(cb, 0) 보다 setImmediate(cb)이 권장된다
*/
