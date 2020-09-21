const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('시:분> ');
rl.prompt();

rl.on('line', function(buf) {
    let time = buf.split(':');
    hour = parseInt(time[0]);
    minute = parseInt(time[1]);
    let newHour, newMin;
    if (minute < 45) {
        newHour = hour-1;
        newMin = minute + 60 - 45;
    } else {
        newHour = hour;
        newMin = minute - 45;
    }
    console.log(`새로운 알람시각 - ${newHour}:${newMin>9?newMin:'0'+newMin}`)
    rl.close();
});