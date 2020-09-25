// node this.js filename [option]  대괄호는 있을수도있고 없으면 무방하다라는 의미

const fs = require('fs');
const readline = require('readline');

if (process.argv.length < 3) {
    console.log('사용법: node this.js filename [option]');
    process.exit();
}
let filename = process.argv[2];
// option 설정(옵션이 추가/길이가 추가되었을 떄 그것이 append라면 옵션은 a가 된다.)
let option;
if (process.argv.length === 4) {
    if (process.argv[3] === 'append')
        option = 'a';
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('> ');

rl.prompt();
let input = '';
rl.on('line', function(buf) {
    input += buf + '\n';
    rl.prompt();
}).on('close', function() {
    if (option === 'a') {
        fs.writeFile(filename, input, {flag: 'a'}, error => {
            if (error)
                console.log(error);
        });
    } else {
        fs.writeFile(filename, input, error => {
            if (error)
                console.log(error);
        });
    }
});
