// 디렉토리에 있는 파일 목록 알아내기
// 비동기적이기때문에, 어느 파일이 먼저 실행되는지 확인이 어려워 두개를 함께 사용하면 에러가 발생한다.

const fs = require('fs');
/* fs.readdir('tmp', function(e, files) {   //tmp 폴더 안의 파일 알아오기
    for (let file of files) {
        let filename = 'tmp/' + file;
        let stat = fs.statSync(filename);
        console.log(file, '\t', stat.size, '바이트');
    }
}); */
// 구해지는 사이즈는 Bytes 기준

// 파일 삭제하기
/* fs.unlink('tmp/tmp.txt', error => {
    if (error)
        console.log(error);
}); */

// 파일 이름 변경하기
fs.rename('tmp/sync.txt', 'tmp/tmp.txt', error => {
    if (error)
        console.log(error);
})