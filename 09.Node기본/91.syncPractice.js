const fs = require('fs');

// readFileSync -> 동기적인 파일 형식
/* console.log('A');
const result = fs.readFileSync('tmp/sample.txt', 'utf8');
console.log(result);    //sample.txt 안의 파일이 나와야함
console.log('C'); */

// 비동기적인 방식
console.log('A');
fs.readFile('tmp/sample.txt', 'utf8', function(err, result) {
    console.log(result);
}); // 파일을 읽는 작업이 끝나면 3번째로 준 함수 인자를 읽는다. (에러가 있다면 err, 두번째는 파일의 내용을 인자로써 공급해주도록 약속되어있음)
console.log('C');