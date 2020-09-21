for (let i=0; i<5; i++) {
    let stars = '';
    for (let k=0; k<5-i-1; k++) {
        stars += ' ';
    }
    for (let k=0; k<2*i+1; k++) {
        stars += '*';
    }
    console.log(stars);
}
for (let i=4; i>0; i--) {
    let stars = '';
    for (let k=0; k<5-i; k++) {
        stars += ' ';
    }
    for (let k=0; k<2*i-1; k++) {
        stars += '*';
    }
    console.log(stars);
}