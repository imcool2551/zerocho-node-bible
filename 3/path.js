const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('--------------------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log(
  'path.basename - extname:',
  path.basename(string, path.extname(string))
);
console.log('--------------------------------------------');
console.log('path.parse():', path.parse(string));
console.log(
  'path.format():',
  path.format({
    dir: '/Users/sangwook/Coding/Nodejs/zerocho',
    name: 'path',
    ext: '.js',
  })
);
console.log(
  'path.normailize():',
  path.normalize('/Users///sangwook//Coding/Nodejs//zerocho/path.js')
);
console.log('--------------------------------------------');
console.log(
  'path.isAbsolute(/Users/sangwook):',
  path.isAbsolute('/Users/sangwook')
);
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('--------------------------------------------');
console.log(
  'path.relative():',
  path.relative('/Users/sangwook/Coding/Nodejs/zerocho', '/Users')
);
console.log(
  'path.join():',
  path.join(__dirname, '..', '..', '/users', '.', '/zerocho')
);
console.log(
  'path.resolve():',
  path.resolve(__dirname, '..', '..', 'users', '.', '/zerocho')
);
