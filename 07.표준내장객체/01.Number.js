let numberFromLiteral = 273;
let numberFromConstructor = new Number(273);

console.log(numberFromLiteral, numberFromConstructor);

let number = 273.12345;
console.log(number.toExponential());
console.log(number.toFixed(2));         //소수점 ()자리까지 나오게 한다. 많이 사용
console.log(number.toPrecision(6));     //유효자리숫자가 총 ()안의 숫자까지 나오게 한다.

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);          //실수(소수점 숫자)를 표현할 때의 미니멈
console.log(Number.MAX_SAFE_INTEGER);   // 2의 53승 - 1
console.log(Number.MIN_SAFE_INTEGER);   // -2의 53승 +1

console.log(Math.pow(-2, 53));