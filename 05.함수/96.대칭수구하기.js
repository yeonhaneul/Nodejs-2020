/* let palindrome = 0;
let a = 0;
let b = 0;

for (i=900; i<=999; i++) {
    a += i
    for (k=900; k<=i; k++) {
        b += k
    }
    let mul = "parseInt(a*b)"
    let reverseMul = (mul.split("").reverse().join(""));
    if (mul === reverseMul) {
        console.log(mul)
    }
} */

function isPalindrome(str) {
    let len = str.length;
    for (let i=0; i<=parseInt(len/2); i++) {
        if (str[i] !== str[len-1-i])
            return false;
    }
    return true;
}

let maxPal = 0;
let maxX, maxY;
for (let i=100; i<=999; i++) {
    for (let k=i; k<=999; k++) {
        let product = i * k;
        if (isPalindrome(String(product))) {
            if (product > maxPal) {
                maxPal = product;
                maxX = i;
                maxY = k;
            }
        }
    }
}
console.log(maxX, maxY, maxPal);