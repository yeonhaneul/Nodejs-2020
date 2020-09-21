// Input을 command argument로 받는 방법
// process.argv 배열에 argument가 전달됨.

/* for (let arg of process.argv) {
    console.log(arg)
    input = parseInt(arg);
    if (isNaN(input))
        continue;

    if (input % 2 === 0) {
        console.log(`${input}은/는 짝수입니다.`);
    } else {
        console.log(`${input}은/는 홀수입니다.`);
    }
} */

for (let i=2; i < process.argv.length; i++) {
    input = parseInt(process.argv[i]);

    if (input % 2 === 0) {
        console.log(`${input}은/는 짝수입니다.`);
    } else {
        console.log(`${input}은/는 홀수입니다.`);
    }
}