// 여러개의 파일 비동기적으로 읽기
// 순서가 랜덤으로 그때그때 바뀐다 -> 이를 처리하기 위한 방법이 또 필요하다.

const fs = require('fs');

//순서보장이 되지 않는 방법
fs.readFile('tmp/a.txt', 'utf-8', (e,bufA) => {
    console.log(bufA);
});
fs.readFile('tmp/b.txt', 'utf-8', (e,bufB) => {
    console.log(bufB);
});
fs.readFile('tmp/c.txt', 'utf-8', (e,bufC) => {
    console.log(bufC);
});

// 순서보장 방법 (콜백속의 콜백속의 콜백.. 콜백지옥)
fs.readFile('tmp/a.txt', 'utf-8', (e,bufA) => {
    fs.readFile('tmp/b.txt', 'utf-8', (e,bufB) => {
        fs.readFile('tmp/c.txt', 'utf-8', (e,bufC) => {
            console.log(bufA);
            console.log(bufB);
            console.log(bufC);
        });
    });
});