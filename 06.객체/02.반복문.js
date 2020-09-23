let person = {
    name: '홍길동', gender:'남자', 나이:29
}

// for of는 error!
/* for (let item of person) {
    console.log(item);
} */

for (let key in person) {
    console.log(key, person[key]);
}