let tri = 1000;
for (let a=0; a<tri; a++) {
    for (let b=a; b<(tri-a)/2; b++) {
        let c = tri - a - b
        if (c*c===a*a+b*b && a<b<c && a+b>c) {
            console.log(a, b, c)
        }
    }
}