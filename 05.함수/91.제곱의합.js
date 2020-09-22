const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('정수 입력> ');
rl.prompt();

rl.on('line', function(buf) {
    // 제곱의 합
    let sum = 0;
    let num1 = parseInt(buf)
    for (i=1; i<=num1; i++) {
        sum += i*i
    }
    console.log(sum);

    // 합의 제곱
    let sum2 = 0;
    let squared = 0;
    let num2 = parseInt(buf)
        for (i=0; i<=num2; i++) {
            sum2 += i;
            squared = sum2*sum2
        }
    console.log(squared);
    rl.close();
});
