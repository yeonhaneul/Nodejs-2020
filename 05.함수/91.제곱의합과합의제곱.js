const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('양의 정수 입력> ');
rl.prompt();

rl.on('line', function(buf) {
    // 제곱의 합
    let sum = 0;
    let num = parseInt(buf)
    for (let i=1; i<=num; i++) {
        sum += i*i;
    }
    // console.log(sum);
    console.log(`1에서 ${num}까지의 제곱의 합 : ${sum}`)

    // 합의 제곱
    let sum2 = 0;
    let squared = 0;
        for (let i=0; i<=num; i++) {
            sum2 += i;
            squared = sum2*sum2
        }
    console.log(`1에서 ${num}까지의 제곱의 합 : ${squared}`);
    rl.close();
});
