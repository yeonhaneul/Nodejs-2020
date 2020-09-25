// node this.js filename        argv[0] argv[1] argv[2] 순서이다.

const fs = require('fs');
const readline = require('readline');

// filename을 받는 방법
if (process.argv.length < 3) {
    console.log('사용법: node this.js filename');
    process.exit();
}
let filename = process.argv[2];

// 파일 이름 입력받기 위한 작업 (받는 작업이 무엇이냐에 따라 rl부분은 달라질 수 있다.)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('> ');
rl.prompt();

// 루프에 들어가기 전에 변수를 선언하고 들어가기
let input = '';

rl.on('line', function(buf) {   // network에서 들어오면 data, end로 시작과 끝이 된다.
    input += buf + '\n';      //input 에 들어온 buf와 개행 \n을 계속 추가
    rl.prompt();
}).on('close', function() {     // 계속해서 rl에 관한 메소드가 나온경우에는, rl.on으로 굳이 쓰지 않고 이어서 사용 할 수 있다.
    fs.writeFile(filename, input, error => {
        if (error)
            console.log(error);
    });
});

// 에러가 난 경우에는 close를 통하여 readline이 닫히도록 설정