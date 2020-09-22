// recheck

let total = 0;

for (let hour=0; hour<=23; hour++) {
    for (let min=0; min<60; min++) {
        let time = hour + ':' + min;
        if (time.indexOf('3') >= 0)
            total += 60;
    }
}

console.log(total);