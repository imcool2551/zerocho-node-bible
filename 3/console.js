const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: 'value',
    },
  },
};

// console.time: timeEnd까지 걸린 시간을 측정한다
console.time('전체시간');
console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에 담아주세요');

// console.table: 배열의 요소로 객체 리터럴을 넣으면 객체의 속성들이 테이블 형식으로 표현된다
console.table([
  { name: '제로', birth: 1994 },
  { name: 'hero', birth: 1988 },
]);

// console.dir: 객체를 표시할 때 사용한다. 기본 depth는 2
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time('시간 측정');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간 측정');

// console.trace: 에러가 어디서 발생했는지 추적한다
function b() {
  console.trace('에러 위치 추적');
}
function a() {
  b();
}
a();

console.timeEnd('전체시간');
