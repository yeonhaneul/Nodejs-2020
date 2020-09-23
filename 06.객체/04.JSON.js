let persons = [
    {name: '홍길동', gender:'남자', age:29},
    {name: '성춘향', gender:'여자', age:17}
];

let externalFrom = JSON.stringify(persons);
console.log(externalFrom);

let p = JSON.parse(externalFrom);
for (let person of p) {
    console.log(person.name, person.gender, person.age);
}