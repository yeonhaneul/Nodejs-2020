// 1에서 어느 수까지 더해야 100이 넘는가?

let sum = 0;
let number = 1;

while (true) {
    sum += number;
    if (sum > 100)
        break;
    number++;
}
console.log(sum, number);

/* while (sum <= 100) {
    sum += number;
    number++;
}
console.log(sum, --number);

sum = 0;
for (let i=1; i<=nember; i++) {
    sum +=i;
}
console.log(sum); */