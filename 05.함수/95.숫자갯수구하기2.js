let counts = [0,0,0,0,0,0,0,0,0,0];
for (let i=1; i<=1000; i++) {
        let numStr = String(i);
        for (let digit of numStr) {
                counts[parseInt(digit)]++;
        }
}
console.log(counts);