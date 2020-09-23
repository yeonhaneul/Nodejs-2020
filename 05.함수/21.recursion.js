// 재귀적 호출 (Recursive call)

function facto(n) {
    if (n === 0)
        return 1;
    return n * facto(n-1);
}

console.log(facto(5))

function fibo(n) {
    if (n === 0 || n === 1)
        return 1;
    return fibo(n-1) + fibo(n-2);
}

for (let i=0; i<10; i++) {
    console.log(`fibonacci(${i}) = (${fibo(i)})`)
}