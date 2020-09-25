//URL 용어를 확인 해 볼 수 있다.

const url = require('url');

let urlSample = 'https://www.hanbit.co.kr/store/books/look.php?p_code=B4872223435';

let parsedObject = url.parse(urlSample);
console.log(parsedObject);
console.log(parsedObject.query);    // 쿼리만 알고싶을때 (.을 쓰고 뒤에 찾고싶은것을 쓴다)

console.log(url.format(parsedObject));