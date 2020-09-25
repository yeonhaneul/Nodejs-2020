const path = require('path');   //path라는 변수에 path라는 모듈을 불러와준다.

console.log(__dirname);     //현재 사용하고있는 디렉토리
console.log(__filename);    //현재 사용하고있는 파일명(자주 사용을 하지 않는다.)

let filename = path.join(__dirname, 'tmp', 'textfile.txt');     // 경로를 같이 붙여놓음
let dirtyname = path.join(__dirname, 'tmp', '..', 'tmp', 'textfile.txt');
console.log(filename);
console.log(dirtyname); //현재는 filename과 동일하게 나온다.