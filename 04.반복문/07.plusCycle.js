/* const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('숫자 입력> ');
rl.prompt();

rl.on('line', function(number) {
    let input = parseInt(number);
    do {
        A = (number/10)
        B = (number%10);
        C = A+B;
        D = B+(C%10);
        if (D=number) {
            break;
        } else {
            continue;
        }
    }
    while (d=number)
rl.close();
}); */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('0~99 사이의 숫자 입력> ');
rl.prompt();

rl.on('line', function(buf) {
    let orgNumber = (buf.length > 1) ? buf : '0'+buf[0];
    let number = orgNumber;
    let cycle = 0;
    while(true) {
        let sum = parseInt(number[0]) + parseInt(number[1]);
        let newNumber = number [1] + sum % 10;
        cycle++;
        console.log(number, newNumber, cycle);
        if (orgNumber === newNumber)
            break;
        if (cycle > 100)
            break;
        number = newNumber;
    }
    rl.close();
});