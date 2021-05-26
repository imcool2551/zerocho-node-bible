console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
  console.log('function', this === exports, this === global);
}
whatIsThis();

/*노트
  node에서 함수안에서의 this는 global객체이고
  파일 내부에서의 this는 module.exports 객체이다
*/
