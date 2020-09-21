// 점수입력
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('성적 입력> ');
rl.prompt();

rl.on('line', function(x) {
    let input = parseInt(x);
        
    if (90 <= input) {
        console.log(`성적:${input} 학점:A`);
    } else if (80 <= input) {
        console.log(`성적:${input} 학점:B`);
    } else if (70 <= input) {
        console.log(`성적:${input} 학점:C`);
    } else if (60 <= input) {
        console.log(`성적:${input} 학점:D`);
    } else {
        console.log(`성적:${input} 학점:F`);
    }
    rl.close();
});