const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('년도 입력>');
rl.prompt();

rl.on('line', function(buf) {
    let year = parseInt(buf);
    if (year % 400 === 0) {
        console.log('Leap Year');
    } else if (year % 100 === 0) {
        console.log('not Leap Year');
    } else if (year % 4 === 0) {
        console.log('Leap Year');
    } else {
        console.log('Not Leap Year');
    }
    rl.close();
});