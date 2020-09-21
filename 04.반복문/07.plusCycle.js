const readline = require('readline');
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
});