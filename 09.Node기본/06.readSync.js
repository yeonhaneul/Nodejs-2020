// 동기적으로 파일 읽기

const fs = require('fs');   //fs = file system

// Binary data 읽기
let buffer = fs.readFileSync('tmp/textfile.txt');   //버퍼라는 변수에 파일을 싱크
console.log(buffer);    // 텍스트가 아니라 문자코드(헥사코드)로 나온다.
console.log(buffer.toString());     //문자코드(헥사코드)를 문자코드로 바꾸어준다.

// 바로 Text data 읽기
let text = fs.readFileSync('tmp/textfile.txt', 'utf8');     //뒤에 옵션을 주면 바로 글자로 읽는다.
console.log(text);

