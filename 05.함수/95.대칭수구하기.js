// 문제 풀고있는 중으로, 결과가 나오지 않습니다..

let palindrome = 0;
let a = 0;
let b = 0;

for (i=900; i<=999; i++) {
    a += i
    for (k=900; k<=999; k++) {
        b += k
    }
    let mul = "parseInt(a*b)"
    let reverseMul = (mul.split("").reverse().join(""));
    if (mul === reverseMul) {
        console.log(mul)
    }
}