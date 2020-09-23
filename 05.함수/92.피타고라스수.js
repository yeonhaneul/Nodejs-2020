/* let tri = 1000;
let a, b, c;
for (a=0; a<=tri; a++) {
    for (b=a; b<(tri-a)/2; b++) {
        c = tri - a - b
        if (c*c===a*a+b*b && a<b<c && a+b>c) {
            console.log(a, b, c)
        }
    }
} */

let a, b, c;
let outerBreak = false;
for (a=0; a<=332; a++) {
    for (b=a+1; b<=499; b++) {
        c = 1000 - a - b;
        if (c > (a + b))
            continue;
        if (c*c === (a*a + b*b)) {
            console.log(a, b, c);
            console.log(a*a, b*b, c*c);
            outerbreak = true;
            break;
        }
    }
    if (outerBreak)
        break;
}