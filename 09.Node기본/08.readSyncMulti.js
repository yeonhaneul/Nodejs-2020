// 여러개의 파일 동기적으로 읽기

const fs = require('fs');

let bufA = fs.readFileSync('tmp/a.txt', 'utf8');
let bufB = fs.readFileSync('tmp/b.txt', 'utf8');
let bufC = fs.readFileSync('tmp/c.txt', 'utf8');

console.log(bufA);
console.log(bufB);
console.log(bufC);