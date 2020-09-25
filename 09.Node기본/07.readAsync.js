// 비동기적으로 파일 읽기

const fs = require('fs');
fs.readFile('tmp/textfile.txt', 'utf8', function(error, buffer) {
    console.log(buffer);
});

//파일을 읽고 난 후에 콜백을 retrun value로 받는것이아니라 함수로 받음